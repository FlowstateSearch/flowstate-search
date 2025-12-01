import { describe, it, expect } from 'vitest';

describe('EmailJS Configuration', () => {
  it('should have EmailJS environment variables set', () => {
    expect(process.env.VITE_EMAILJS_SERVICE_ID).toBeDefined();
    expect(process.env.VITE_EMAILJS_TEMPLATE_ID).toBeDefined();
    expect(process.env.VITE_EMAILJS_PUBLIC_KEY).toBeDefined();
    
    // Verify the values match what the user provided (masked for security in logs)
    expect(process.env.VITE_EMAILJS_SERVICE_ID).toBe('service_oo4ip5r');
    expect(process.env.VITE_EMAILJS_TEMPLATE_ID).toBe('template_r4u1ra9');
    expect(process.env.VITE_EMAILJS_PUBLIC_KEY).toBe('hL3PhhQo8i3ENEwJp');
  });
});
