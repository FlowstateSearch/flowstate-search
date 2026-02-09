import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Trash2, Copy, Plus, Pencil, Check } from "lucide-react";


// Helper function to format relative time
function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  
  // For older dates, show the actual date
  return date.toLocaleDateString();
}

export default function AdminPortals() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  const ADMIN_PASSWORD = "P0rter32%";
  
  // Check localStorage for existing auth
  useEffect(() => {
    const authStatus = localStorage.getItem("admin_authenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("admin_authenticated", "true");
      setPasswordError("");
    } else {
      setPasswordError("Incorrect password. Please try again.");
      setPasswordInput("");
    }
  };
  
  const toast = (opts: { title: string; description?: string; variant?: string }) => {
    alert(opts.description ? `${opts.title}\n${opts.description}` : opts.title);
  };
  const utils = trpc.useUtils();
  
  // Fetch portal users
  const { data: portalUsers = [], isLoading } = trpc.portals.list.useQuery();
  
  // Mutations
  const createMutation = trpc.portals.create.useMutation({
    onSuccess: () => {
      utils.portals.list.invalidate();
      setIsAddDialogOpen(false);
      resetForm();
      toast({ title: "Portal user created successfully" });
    },
    onError: (error) => {
      toast({ title: "Error creating portal user", description: error.message, variant: "destructive" });
    },
  });
  
  const updateMutation = trpc.portals.update.useMutation({
    onSuccess: () => {
      utils.portals.list.invalidate();
      setEditingId(null);
      toast({ title: "Portal user updated successfully" });
    },
    onError: (error) => {
      toast({ title: "Error updating portal user", description: error.message, variant: "destructive" });
    },
  });
  
  const deleteMutation = trpc.portals.delete.useMutation({
    onSuccess: () => {
      utils.portals.list.invalidate();
      toast({ title: "Portal user deleted successfully" });
    },
    onError: (error) => {
      toast({ title: "Error deleting portal user", description: error.message, variant: "destructive" });
    },
  });
  
  // Form state
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    displayName: "",
    loxoUrl: "",
    notes: "",
  });
  
  // Edit state
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editData, setEditData] = useState({
    username: "",
    displayName: "",
    loxoUrl: "",
    notes: "",
  });
  
  const resetForm = () => {
    setFormData({ username: "", displayName: "", loxoUrl: "", notes: "" });
  };
  
  const handleCreate = () => {
    createMutation.mutate(formData);
  };
  
  const handleEdit = (user: any) => {
    setEditingId(user.id);
    setEditData({
      username: user.username,
      displayName: user.displayName,
      loxoUrl: user.loxoUrl,
      notes: user.notes || "",
    });
  };
  
  const handleSaveEdit = (id: number) => {
    updateMutation.mutate({ id, ...editData });
  };
  
  const handleDelete = (id: number, displayName: string) => {
    if (confirm(`Are you sure you want to delete portal access for ${displayName}?`)) {
      deleteMutation.mutate({ id });
    }
  };
  
  const copyPortalLink = (username: string) => {
    const link = `${window.location.origin}/portal/${username}`;
    navigator.clipboard.writeText(link);
      toast({ title: "Copied!", description: link });
  };
  
  // Password protection screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Access</CardTitle>
            <CardDescription>Enter password to access the portal management dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter admin password"
                  autoFocus
                />
              </div>
              {passwordError && (
                <Alert variant="destructive">
                  <AlertDescription>{passwordError}</AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full">
                Access Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <p className="text-muted-foreground">Loading portal users...</p>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Portal Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage hiring manager access to candidate portals
          </p>
        </div>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Portal User
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Portal User</DialogTitle>
              <DialogDescription>
                Create portal access for a hiring manager
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="username">Username (for URL)</Label>
                <Input
                  id="username"
                  placeholder="tomjones"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Will be used in: /portal/{formData.username || "username"}
                </p>
              </div>
              
              <div>
                <Label htmlFor="displayName">Display Name</Label>
                <Input
                  id="displayName"
                  placeholder="Tom Jones"
                  value={formData.displayName}
                  onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                />
              </div>
              
              <div>
                <Label htmlFor="loxoUrl">Loxo Portal URL</Label>
                <Input
                  id="loxoUrl"
                  placeholder="https://palermo-rhodes.app.loxo.co/..."
                  value={formData.loxoUrl}
                  onChange={(e) => setFormData({ ...formData, loxoUrl: e.target.value })}
                />
              </div>
              
              <div>
                <Label htmlFor="notes">Notes (Optional)</Label>
                <Input
                  id="notes"
                  placeholder="Additional notes..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={handleCreate}
                disabled={!formData.username || !formData.displayName || !formData.loxoUrl}
              >
                Create
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      {portalUsers.length === 0 ? (
        <Alert>
          <AlertDescription>
            No portal users yet. Click "Add Portal User" to create the first one.
          </AlertDescription>
        </Alert>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Portal Users ({portalUsers.length})</CardTitle>
            <CardDescription>
              Manage hiring manager portal access
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Username</TableHead>
                  <TableHead>Display Name</TableHead>
                  <TableHead>Loxo URL</TableHead>
                  <TableHead>Last Accessed</TableHead>
                  <TableHead>Access Count</TableHead>
                  <TableHead>Notes</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {portalUsers.map((user: any) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-mono text-sm">
                      {editingId === user.id ? (
                        <Input
                          value={editData.username}
                          onChange={(e) => setEditData({ ...editData, username: e.target.value })}
                          className="w-32"
                        />
                      ) : (
                        user.username
                      )}
                    </TableCell>
                    <TableCell>
                      {editingId === user.id ? (
                        <Input
                          value={editData.displayName}
                          onChange={(e) => setEditData({ ...editData, displayName: e.target.value })}
                        />
                      ) : (
                        user.displayName
                      )}
                    </TableCell>
                    <TableCell className="max-w-xs truncate">
                      {editingId === user.id ? (
                        <Input
                          value={editData.loxoUrl}
                          onChange={(e) => setEditData({ ...editData, loxoUrl: e.target.value })}
                        />
                      ) : (
                        <a
                          href={user.loxoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {user.loxoUrl.substring(0, 50)}...
                        </a>
                      )}
                    </TableCell>
                    <TableCell>
                      {user.lastAccessed
                        ? formatRelativeTime(new Date(user.lastAccessed))
                        : "Never"}
                    </TableCell>
                    <TableCell className="text-center">
                      {user.accessCount || 0}
                    </TableCell>
                    <TableCell className="max-w-xs truncate">
                      {editingId === user.id ? (
                        <Input
                          value={editData.notes}
                          onChange={(e) => setEditData({ ...editData, notes: e.target.value })}
                        />
                      ) : (
                        user.notes || "-"
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        {editingId === user.id ? (
                          <>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleSaveEdit(user.id)}
                            >
                              <Check className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => setEditingId(null)}
                            >
                              Cancel
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => copyPortalLink(user.username)}
                              title="Copy portal link"
                            >
                              <Copy className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleEdit(user)}
                              title="Edit"
                            >
                              <Pencil className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleDelete(user.id, user.displayName)}
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
