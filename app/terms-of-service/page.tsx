import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Head from "next/head";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | Todify</title>
        <meta name="description" content="Review the Terms of Service for Todify, our task management app." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="max-w-3xl mx-auto py-12 px-6">
        <Card className="bg-background text-foreground shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Last updated: <span className="font-medium">February 2025</span></p>
            <Separator className="my-4" />

            <h2 className="text-lg font-semibold">1. Introduction</h2>
            <p className="text-muted-foreground text-sm mt-2">
              Welcome to <span className="font-medium">Todify</span>. By accessing or using our app, you agree to these Terms of Service.  
              If you do not agree, please discontinue use of the app.
            </p>

            <h2 className="text-lg font-semibold mt-6">2. Use of Todify</h2>
            <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-2">
              <li>You must be at least 13 years old to use Todify.</li>
              <li>You agree to use Todify only for lawful purposes.</li>
              <li>We reserve the right to suspend or terminate your account if you violate these terms.</li>
            </ul>

            <h2 className="text-lg font-semibold mt-6">3. User Accounts</h2>
            <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-2">
              <li>You are responsible for maintaining the security of your account.</li>
              <li>Providing false information may result in account termination.</li>
              <li>You must notify us if you suspect unauthorized access to your account.</li>
            </ul>

            <h2 className="text-lg font-semibold mt-6">4. Content Ownership</h2>
            <p className="text-muted-foreground text-sm mt-2">
              You own the tasks and notes you create in Todify. However, by using our app, you grant us permission to store and process this data to provide services.
            </p>

            <h2 className="text-lg font-semibold mt-6">5. Prohibited Activities</h2>
            <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-2">
              <li>Do not attempt to hack, modify, or disrupt Todify’s services.</li>
              <li>Do not use Todify to store or share illegal, harmful, or offensive content.</li>
              <li>Do not impersonate other users or engage in fraudulent activity.</li>
            </ul>

            <h2 className="text-lg font-semibold mt-6">6. Termination</h2>
            <p className="text-muted-foreground text-sm mt-2">
              We may suspend or terminate your access to Todify at any time if we find that you have violated these terms.
            </p>

            <h2 className="text-lg font-semibold mt-6">7. Limitation of Liability</h2>
            <p className="text-muted-foreground text-sm mt-2">
              Todify is provided "as is" without warranties. We are not responsible for any data loss, service disruptions, or damages arising from app usage.
            </p>

            <h2 className="text-lg font-semibold mt-6">8. Changes to These Terms</h2>
            <p className="text-muted-foreground text-sm mt-2">
              We may update these Terms of Service. Continued use of Todify after changes means you accept the updated terms.
            </p>

            <h2 className="text-lg font-semibold mt-6">9. Contact Us</h2>
            <p className="text-muted-foreground text-sm mt-2">
              If you have any questions about these terms, please contact us at:
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