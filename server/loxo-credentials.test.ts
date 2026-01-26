import { describe, expect, it } from "vitest";
import axios from "axios";
import { ENV } from "./_core/env";

describe("Loxo Credentials Validation", () => {
  it("should have all required Loxo environment variables", () => {
    expect(ENV.loxoApiKey).toBeTruthy();
    expect(ENV.loxoAgencySlug).toBeTruthy();
    expect(ENV.loxoJobId).toBeTruthy();
    
    expect(ENV.loxoAgencySlug).toBe("palermo-rhodes");
    expect(ENV.loxoJobId).toBe("MzQwLTE0bXFhaWhrYXA3dG42NzM=");
    expect(ENV.loxoApiKey?.length).toBeGreaterThan(0);
  });

  it("should be able to access the Loxo job form page", async () => {
    const formPageUrl = `https://${ENV.loxoAgencySlug}.app.loxo.co/job/${ENV.loxoJobId}/form?source_type=app`;
    
    try {
      const response = await axios.get(formPageUrl, {
        timeout: 10000,
        validateStatus: (status) => status >= 200 && status < 500,
      });
      
      // Should get a 200 response with HTML form
      expect(response.status).toBe(200);
      expect(response.data).toContain("authenticity_token");
      expect(response.data).toContain("source_type_id");
    } catch (error: any) {
      // If we get a network error, the credentials might be wrong or Loxo is down
      throw new Error(`Failed to access Loxo form page: ${error.message}`);
    }
  }, 15000); // 15 second timeout for network request
});
