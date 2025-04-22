import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const PrivacyPolicyDialog = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl text-left overflow-y-auto max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl text-center">Privacy Policy</DialogTitle>
          <DialogDescription className="text-center text-gray-500">
            Last Updated: April 22, 2025
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-4 text-sm text-gray-700">
          <p>
            Dolo Dynamic Solutions (Pty) Ltd. (“we,” “our,” “us”) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
            you visit our website or use our services.
          </p>

          <hr />

          <div>
            <h3 className="font-semibold">1. Information We Collect</h3>
            <p>
              We may collect personal information (such as name, email address) and usage data (such as browser type,
              pages visited) you provide through forms or interactions with our site.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">2. How We Use Your Information</h3>
            <p>
                Your information is used to provide and improve our services, communicate with you, and send updates or
                marketing communications (if you've opted in).            </p>
          </div>

          <div>
            <h3 className="font-semibold">3. Cookies & Tracking</h3>
            <p>
                Our website uses cookies to enhance user experience and track performance. You can control cookie
                preferences through your browser settings.            </p>
          </div>

          <div>
            <h3 className="font-semibold">4. Data Sharing</h3>
            <p>
              We do not sell or rent your personal data. We may share information with trusted third-party partners who
              assist in service delivery, but only as necessary and with confidentiality agreements in place.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">5. Data Security</h3>
            <p>
              We implement industry-standard measures to protect your data from unauthorized access, disclosure, or
              misuse.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">6. Your Rights</h3>
            <p>
                You have the right to access, correct, or delete your personal information. To exercise these rights,
                please contact us directly.            
            </p>
          </div>

          <div>
            <h3 className="font-semibold">7. Third-Party Links</h3>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or
              content of these sites.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">8. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy periodically. Changes will be posted on this page with an updated
              effective date.
            </p>
          </div>

          <div>
            <p>
            For questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:Info@dolodynamicsolutions.com" className="text-dolo-blue underline">
              Info@dolodynamicsolutions.com
            </a>.
          </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyDialog;
