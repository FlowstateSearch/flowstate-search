import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Loader2, CheckCircle2, ArrowLeft, MapPin, Clock, DollarSign } from "lucide-react";
import { Link } from "wouter";

interface JobData {
  title: string;
  location: string;
  employmentType: string;
  postedDate: string;
  tags: string[];
  quickOverview: string;
  theWho: string;
  theWhat: string;
  theWhy: string;
  theWhere: string;
  roleDescription: string;
  keyResponsibilities: string[];
  mustHaves: string[];
  preferred: string[];
  compensation: {
    range: string;
    label: string;
    additional: string[];
  };
  benefits: string[];
}

interface JobApplicationProps {
  jobData: JobData;
  jobId?: string;
}

export function JobApplication({ jobData, jobId }: JobApplicationProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedinUrl: "",
    consent: false,
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const submitMutation = trpc.loxo.submitApplication.useMutation({
    onSuccess: () => {
      setIsSubmitted(true);
      toast.success("Application submitted successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit application");
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 16 * 1024 * 1024) {
        toast.error("File size must be less than 16MB");
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resumeFile) {
      toast.error("Please upload your resume");
      return;
    }

    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = (reader.result as string).split(",")[1];

        await submitMutation.mutateAsync({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          linkedinUrl: formData.linkedinUrl,
          resume: {
            name: resumeFile.name,
            type: resumeFile.type,
            base64,
          },
          consent: formData.consent,
          jobId,
        });
      };
      reader.readAsDataURL(resumeFile);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7f8fc] p-4">
        <Card className="w-full max-w-2xl shadow-xl">
          <CardContent className="pt-12 pb-12 text-center px-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for applying to the {jobData.title} position. We'll review your application and be in touch soon.
            </p>
            <Link href="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Return to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showForm) {
    return (
      <div className="min-h-screen bg-[#f7f8fc] py-12 px-4">
        <div className="container max-w-2xl">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Apply for {jobData.title}</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowForm(false)}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedinUrl">LinkedIn Profile URL</Label>
                <Input
                  id="linkedinUrl"
                  type="url"
                  value={formData.linkedinUrl}
                  onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                  placeholder="https://www.linkedin.com/in/yourprofile"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Resume/CV *</Label>
                  <Input
                    id="resume"
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="cursor-pointer"
                  />
                  <p className="text-sm text-muted-foreground">
                    Accepted formats: PDF, DOC, DOCX (Max 16MB)
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, consent: checked as boolean })
                    }
                  />
                  <Label htmlFor="consent" className="text-sm font-normal cursor-pointer">
                    I consent to be contacted about job opportunities.
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#00a69c] hover:bg-[#008c84]"
                  size="lg"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f8fc]">
      {/* Header with Back Button and Apply CTA */}
      <div className="bg-white border-b">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <Button
            onClick={() => setShowForm(true)}
            className="bg-[#00a69c] hover:bg-[#008c84]"
          >
            Apply Now
          </Button>
        </div>
      </div>

      <div className="container py-12 px-4">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Job Header */}
            <div>
              <h1 className="text-4xl font-bold mb-4">{jobData.title}</h1>
              <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {jobData.location}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {jobData.employmentType}
                </span>
                <span>{jobData.postedDate}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {jobData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Overview */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Quick Overview</h2>
                <p className="text-muted-foreground mb-6">{jobData.quickOverview}</p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-1">THE WHO</h3>
                    <p className="text-muted-foreground">{jobData.theWho}</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">THE WHAT</h3>
                    <p className="text-muted-foreground">{jobData.theWhat}</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">THE WHY</h3>
                    <p className="text-muted-foreground">{jobData.theWhy}</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">THE WHERE</h3>
                    <p className="text-muted-foreground">{jobData.theWhere}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* The Role */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">The Role</h2>
                <p className="text-muted-foreground mb-6">{jobData.roleDescription}</p>

                <h3 className="text-xl font-bold mb-3">Key Responsibilities</h3>
                <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                  {jobData.keyResponsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Requirements</h2>

                <h3 className="text-xl font-bold mb-3">Must Haves</h3>
                <ul className="space-y-2 list-disc pl-5 text-muted-foreground mb-6">
                  {jobData.mustHaves.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold mb-3">Preferred</h3>
                <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                  {jobData.preferred.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Compensation Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-[#00a69c] mb-4">
                  <DollarSign className="w-5 h-5" />
                  <h3 className="font-bold">Compensation</h3>
                </div>
                <div className="text-3xl font-bold mb-2">{jobData.compensation.range}</div>
                <div className="text-sm text-muted-foreground mb-4">
                  {jobData.compensation.label}
                </div>
                <div className="space-y-1">
                  {jobData.compensation.additional.map((item, index) => (
                    <div key={index} className="text-sm">
                      + {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Benefits & Perks</h3>
                <ul className="space-y-2">
                  {jobData.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-green-600 mt-0.5">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* About Flowstate Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">About Flowstate</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We are Flowstate – a network of recruiters changing the way we get hired. We
                  represent only the top talent in their fields.
                </p>
                <a
                  href="https://flowstatesearch.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#00a69c] hover:underline"
                >
                  Learn more about us →
                </a>
              </CardContent>
            </Card>

            {/* Apply Button */}
            <Button
              onClick={() => setShowForm(true)}
              className="w-full bg-[#00a69c] hover:bg-[#008c84]"
              size="lg"
            >
              Apply for this Role
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
