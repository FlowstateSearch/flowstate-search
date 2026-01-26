import axios from 'axios';
import FormData from 'form-data';

const LOXO_AGENCY_SLUG = 'palermo-rhodes';
const LOXO_JOB_ID = 'MzQwLTE0bXFhaWhrYXA3dG42NzM=';

async function testSubmission() {
  try {
    // Step 1: Get the form page
    const formPageUrl = `https://${LOXO_AGENCY_SLUG}.app.loxo.co/job/${LOXO_JOB_ID}/form?source_type=app`;
    console.log('Fetching form page:', formPageUrl);
    
    const formPageResponse = await axios.get(formPageUrl);
    const html = formPageResponse.data;
    
    // Extract tokens
    const tokenMatch = html.match(/name=['"]authenticity_token['"]\s*value=(['"])([^'"]+)\1/) ||
                      html.match(/name=['"]authenticity_token['"]\s*value=([^\s>\/]+)/);
    const sourceTypeMatch = html.match(/name=['"]source_type_id['"]\s*value=(['"])([^'"]+)\1/) ||
                           html.match(/name=['"]source_type_id['"]\s*value=([^\s>\/]+)/);
    
    const authenticityToken = tokenMatch ? (tokenMatch[2] || tokenMatch[1]) : null;
    const sourceTypeId = sourceTypeMatch ? (sourceTypeMatch[2] || sourceTypeMatch[1]) : null;
    
    console.log('Extracted token:', authenticityToken);
    console.log('Extracted source type ID:', sourceTypeId);
    
    if (!authenticityToken || !sourceTypeId) {
      throw new Error('Could not extract tokens');
    }
    
    // Step 2: Prepare form data
    const formData = new FormData();
    formData.append('utf8', '✓');
    formData.append('authenticity_token', authenticityToken);
    formData.append('source_type_id', sourceTypeId);
    formData.append('name', 'Test Candidate Debug');
    formData.append('email', 'testdebug@example.com');
    formData.append('phone', '555-9999');
    
    // Create a minimal PDF
    const dummyPDF = Buffer.from('%PDF-1.4\nTest Resume Content\n%%EOF');
    formData.append('resume_uploaded_file[]', dummyPDF, {
      filename: 'test-resume.pdf',
      contentType: 'application/pdf',
    });
    formData.append('resume_source_type_id', sourceTypeId);
    
    // Step 3: Submit
    const submitUrl = `https://${LOXO_AGENCY_SLUG}.app.loxo.co/job/${LOXO_JOB_ID}/finish?source_type=app`;
    console.log('Submitting to:', submitUrl);
    
    const submitResponse = await axios.post(submitUrl, formData, {
      headers: {
        ...formData.getHeaders(),
        'Cookie': formPageResponse.headers['set-cookie']?.join('; ') || '',
      },
      maxRedirects: 0,
      validateStatus: (status) => status >= 200 && status < 400,
    });
    
    console.log('Submit response status:', submitResponse.status);
    console.log('Submit response headers:', submitResponse.headers);
    console.log('Success! Check Loxo for "Test Candidate Debug"');
    
  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    }
  }
}

testSubmission();
