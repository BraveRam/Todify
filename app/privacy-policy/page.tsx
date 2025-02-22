import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Todify</title>
        <meta name="description" content="Learn how Todify handles your personal data and protects your privacy." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="max-w-3xl mx-auto py-12 px-6">
        <Card className="bg-background text-foreground shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Last updated: <span className="font-medium">February 2025</span></p>
            <Separator className="my-4" />

            <h2 className="text-lg font-semibold">1. Introduction</h2>
            <p className="text-muted-foreground text-sm mt-2">
              Welcome to <span className="font-medium">Todify</span>. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our To-Do app.  
              By accessing or using <span className="font-medium">Todify</span>, you agree to the terms outlined in this policy.
            </p>

            <h2 className="text-lg font-semibold mt-6">2. Information We May Collect</h2>
            <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-2">
              <li><span className="font-medium">Personal Information</span>: Name and email address (provided during account creation).</li>
              <li><span className="font-medium">To-Do Data</span>: Tasks, due dates, and notes you create.</li>
              <li><span className="font-medium">Device Information</span>: IP address, browser type, and operating system for security purposes.</li>
            </ul>

            <h2 className="text-lg font-semibold mt-6">3. How We Use Your Data</h2>
            <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-2">
              <li><span className="font-medium">Providing Services</span>: To store and sync your to-dos across devices.</li>
              <li><span className="font-medium">Security & Fraud Prevention</span>: To detect and prevent unauthorized access.</li>
              <li><span className="font-medium">Analytics & Improvements</span>: To analyze app usage trends and improve our services.</li>
            </ul>

            <h2 className="text-lg font-semibold mt-6">4. Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground text-sm mt-2">
              We do <span className="font-medium">not</span> sell, rent, or trade your personal data. However, we may share your data in the following cases:
            </p>
            <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-2">
              <li><span className="font-medium">Legal Compliance</span>: If required by law, such as responding to a legal request.</li>
              <li><span className="font-medium">Service Providers</span>: We may use third-party tools for hosting, analytics, or security.</li>
            </ul>

            <h2 className="text-lg font-semibold mt-6">5. Data Security</h2>
            <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-2">
              <li><span className="font-medium">Encryption</span>: Your data is encrypted in transit and at rest.</li>
              <li><span className="font-medium">Access Controls</span>: Only authorized personnel can access your data.</li>
              <li><span className="font-medium">Regular Audits</span>: We periodically review our security practices.</li>
            </ul>

            <h2 className="text-lg font-semibold mt-6">6. Data Retention</h2>
            <p className="text-muted-foreground text-sm mt-2">
              We retain your data for as long as your account is active. You can request deletion of your account and data at any time by contacting us.
            </p>

            <h2 className="text-lg font-semibold mt-6">7. Your Privacy Rights</h2>
            <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-2">
              <li><span className="font-medium">Access</span>: Request a copy of your stored data.</li>
              <li><span className="font-medium">Correct</span>: Update incorrect or incomplete data.</li>
              <li><span className="font-medium">Delete</span>: Request deletion of your data.</li>
              <li><span className="font-medium">Restrict</span>: Limit how we use your data.</li>
            </ul>

            <h2 className="text-lg font-semibold mt-6">8. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground text-sm mt-2">
              We use cookies and similar technologies to improve your experience and analyze app usage. You can disable cookies in your browser settings, but some features may not work as intended.
            </p>

            <h2 className="text-lg font-semibold mt-6">9. Third-Party Services</h2>
            <p className="text-muted-foreground text-sm mt-2">
              Our app may contain links to third-party services. We are not responsible for their privacy policies or practices.
            </p>

            <h2 className="text-lg font-semibold mt-6">10. Children's Privacy</h2>
            <p className="text-muted-foreground text-sm mt-2">
              <span className="font-medium">Todify</span> is not intended for children under the age of 13. We do not knowingly collect personal data from children.  
              If you are a parent or guardian and believe we have collected information from your child, please contact us immediately.
            </p>

            <h2 className="text-lg font-semibold mt-6">11. Changes to This Policy</h2>
            <p className="text-muted-foreground text-sm mt-2">
              We may update this Privacy Policy from time to time. All updates will be posted here with a new effective date.  
              We encourage you to review this page periodically for any changes.
            </p>

            <h2 className="text-lg font-semibold mt-6">12. Contact Us</h2>
            <p className="text-muted-foreground text-sm mt-2">
              If you have any questions, concerns, or requests regarding your privacy, please reach out to us at:  
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              <span className="font-medium">Email</span>: Plxor7@gmail.com
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}