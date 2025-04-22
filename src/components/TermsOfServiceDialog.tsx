import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const TermsOfServiceDialog = ({ open, setOpen }) => {
  return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl text-left overflow-y-auto max-h-[80vh]">
          <DialogHeader>
            <DialogTitle className="text-3xl text-center">Terms of Service</DialogTitle>
            <DialogDescription className="text-center text-gray-500">
              Last Updated: April 22, 2025
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 space-y-4 text-sm text-gray-700">
            <p>
              Welcome to Dolo Dynamic Solutions (Pty) Ltd. (“we,” “our,” “us”). These Terms of Service (“Terms”)
              govern your use of our website and services. By accessing or using our site and services, you agree to
              be bound by these Terms.
            </p>

            <hr />

            <div>
              <h3 className="font-semibold">1. Services</h3>
              <p>
                We provide custom software development, mobile and web app development, UI/UX design, and related
                technical consulting services. The scope, deliverables, and timelines for each project will be
                defined in individual contracts or proposals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">2. Eligibility</h3>
              <p>
                You must be at least 18 years old and legally able to enter into binding agreements to use our
                services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">3. Intellectual Property</h3>
              <p>
                All content, code, graphics, and other materials we create are the intellectual property of Dolo
                Dynamic Solutions (Pty) Ltd. unless otherwise agreed in writing. Clients may receive a license to
                use deliverables as outlined in the project agreement.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">4. Payment Terms</h3>
              <p>
                Payment terms, including deposits, milestones, and final payments, will be specified in the project
                contract. Late payments may result in delays or suspension of services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">5. Confidentiality</h3>
              <p>
                We agree to keep all confidential information shared by clients secure and not disclose it to third
                parties, except as required by law or with the client’s consent.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">6. Client Responsibilities</h3>
              <p>
                Clients must provide timely feedback, materials, and access to required systems to enable the
                successful delivery of services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">7. Warranties & Limitations</h3>
              <p>
                We provide our services “as is.” While we strive for high-quality results, we do not guarantee that
                software will be free from bugs or errors. We are not liable for any indirect or consequential
                damages.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">8. Revisions & Changes</h3>
              <p>
                Reasonable revisions are included in project scope. Additional changes beyond the agreed scope may
                incur additional charges.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">9. Termination</h3>
              <p>
                Either party may terminate the agreement with written notice. In such cases, the client will be
                billed for work completed up to the termination date.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">10. Privacy</h3>
              <p>
                We respect your privacy. Our Privacy Policy outlines how we collect, use, and protect your data.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">11. Governing Law</h3>
              <p>
                These Terms are governed by the laws of South Africa, without regard to conflict of law principles.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">12. Updates to Terms</h3>
              <p>
                We may update these Terms occasionally. Continued use of our services after changes are posted means
                you accept the new Terms.
              </p>
            </div>

            <hr />

            <p>
              For questions about these Terms, please contact us at{" "}
              <a href="mailto:Info@dolodynamicsolutions.com" className="text-dolo-blue underline">
                Info@dolodynamicsolutions.com
              </a>.
            </p>
          </div>
        </DialogContent>
      </Dialog>
  );
};

export default TermsOfServiceDialog;
