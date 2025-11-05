import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaUserShield, FaFileContract } from 'react-icons/fa';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-primary-500/20"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 168, 232, 0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-custom relative z-10 text-white text-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-flex items-center px-4 py-2 bg-primary-500/20 border border-primary-400/30 rounded-full text-primary-300 text-sm font-semibold">
                <FaShieldAlt className="mr-2" />
                Your Privacy Matters
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Privacy <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              How we collect, use, and protect your information
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FaLock className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">Secure</h3>
                <p className="text-sm text-gray-600">Your data is protected with industry-standard security</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-100 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FaUserShield className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">Transparent</h3>
                <p className="text-sm text-gray-600">Clear information about how we use your data</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FaFileContract className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">Compliant</h3>
                <p className="text-sm text-gray-600">Adhering to all privacy regulations and laws</p>
              </motion.div>
            </div>

            {/* Legal Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12"
            >
              <div className="space-y-8 text-gray-700">
                <div className="pb-6 border-b border-gray-200">
                  <p className="font-semibold text-navy-900">Effective Date: October 31, 2025</p>
                  <p>Company: MRE Consulting & Insurance ("MRECAI," "we," "us," "our")</p>
                  <p>Address: 1 Willow Road Place, Great Neck, NY 11021</p>
                  <p>Phone: 929-919-3574</p>
                  <p>Website: www.MRECAI.com</p>
                  <p>Privacy Contact: privacy@mrecai.com</p>
                </div>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    1) Scope & Acceptance
                  </h2>
                  <p className="leading-relaxed">This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website, communicate with us, or use our consulting and insurance services (the "Services"). By interacting with the Services, you agree to this Policy to the maximum extent permitted by law.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    2) What We Collect
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div><strong>Identifiers & Contact:</strong> name, email, phone, address, professional details.</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div><strong>Insurance/Financial:</strong> underwriting inputs, applications, policy data, loss runs, claims history, billing details you provide or authorize.</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div><strong>Technical/Usage:</strong> IP address, device/OS/browser, pages viewed, timestamps, session IDs, approximate location, cookie and pixel data.</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div><strong>Content & Files:</strong> messages, recordings (with notice), forms, uploads, signatures.</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div><strong>Partner/Carrier Data:</strong> quoting status, bind/issue information, endorsements.</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div><strong>AI Interaction Data:</strong> preference signals, form responses, engagement context derived from AI-assisted workflows.</div>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    3) Sources of Information
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div>Directly from you (forms, calls, emails).</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div>Service providers & vendors (hosting, analytics, communications).</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div>Insurance ecosystem (carriers, MGAs, TPAs, other brokers, loss-run services).</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div>Public/permissioned sources (government records, business databases, lead enrichment).</div>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    4) How We Use Information
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div>Deliver, maintain, and improve the Services; obtain quotes; process applications; coordinate with carriers; provide support; prevent fraud; ensure security; analyze usage; personalize content; train our teams and systems.</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div><strong>Marketing & Education:</strong> send newsletters, reminders, promotions, updates, and content relevant to your interests.</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div><strong>Compliance:</strong> legal/regulatory obligations, audits, and lawful requests.</div>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    5) Automatic Enrollment in Communications (Opt-Out Anytime)
                  </h2>
                  <p className="leading-relaxed">By providing contact information or using the Services, you automatically consent to receive email, SMS/MMS, phone, and digital advertising from us and our service providers. Opt-out at any time by clicking "Unsubscribe," replying STOP to texts, or emailing privacy@mrecai.com with "Opt-Out."</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    6) Cookies, Pixels & Similar Tech
                  </h2>
                  <p className="leading-relaxed">We use necessary cookies for core site functions and, where permitted, analytics/advertising technologies for measurement and optimization. You can manage cookies in your browser and any consent banner provided. Some features may not function without certain cookies.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    7) Sharing & "No Sale"
                  </h2>
                  <p className="leading-relaxed mb-3">We do not sell personal information in exchange for money. We share limited data with:</p>
                  <ul className="space-y-3 mb-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div>Carriers/brokers/MGAs/TPAs for quoting/servicing;</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div>Vendors (secure hosting, analytics, communications, e-signature, AI tooling);</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div>Professional advisors (legal, tax, compliance) under confidentiality;</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div>Regulators/law enforcement when legally required;</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div>Business transfers (merger, acquisition, financing).</div>
                    </li>
                  </ul>
                  <p className="leading-relaxed">Where certain state laws treat analytics/ads as "sharing," you may exercise opt-out rights via privacy@mrecai.com.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    8) Data Security & Your Acceptance of Risk
                  </h2>
                  <p className="leading-relaxed">We implement commercially reasonable administrative, technical, and physical safeguards. No system is perfectly secure, and you accept all residual risk associated with electronic transmission, storage, and third-party platforms.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    9) Retention & Deletion
                  </h2>
                  <p className="leading-relaxed">We retain information as long as necessary for Services, legal obligations (including insurance recordkeeping), dispute resolution, and enforcement. When no longer required, we take reasonable steps to de-identify or delete. Legal retention requirements may limit deletion.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    10) Your Responsibilities & Verification
                  </h2>
                  <p className="leading-relaxed">You must provide true, complete, and current information and promptly update changes. We are not responsible for consequences arising from inaccuracies or omissions in information you provide or authorize.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    11) AI & Automation Disclosure
                  </h2>
                  <p className="leading-relaxed">We use AI/automation to streamline intake, summaries, reminders, and recommendations. AI outputs may contain errors, omissions, or delays, and are informational only—they do not replace professional judgment or carrier policy forms.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    12) Third-Party Links & Independent Contractors
                  </h2>
                  <p className="leading-relaxed">We are not responsible for third-party websites, tools, or independent contractors' practices. Review their policies before providing information. Our vendors and consultants act as independent contractors, not our employees or agents.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    13) Global Transfers & Export Compliance
                  </h2>
                  <p className="leading-relaxed">Information may be processed in the U.S. and other countries. If applicable, we use appropriate safeguards for cross-border transfers. You are responsible for complying with export/sanctions laws.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    14) Your Rights (U.S. State & International)
                  </h2>
                  <p className="leading-relaxed">Subject to verification and legal exemptions, you may request access, correction, deletion, or to opt out of certain processing. We typically respond within 45 days or the timeframe allowed by law. Contact privacy@mrecai.com (state your jurisdiction). If provided, translations are for convenience; English governs.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    15) "No Liability for Third-Party Breaches"
                  </h2>
                  <p className="leading-relaxed">Despite safeguards, we are not liable for unauthorized access attributable to third parties, force majeure, or factors beyond our reasonable control.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    16) Notices
                  </h2>
                  <p className="leading-relaxed">Official privacy communications may be made by email to privacy@mrecai.com and will be deemed delivered when sent.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    17) Changes to This Policy
                  </h2>
                  <p className="leading-relaxed">We may update this Policy. The Effective Date shows the latest version. Continuing to use the Services means you accept updates.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    18) Dispute Resolution; Binding Arbitration; Class-Action Waiver
                  </h2>
                  <p className="leading-relaxed">Any dispute relating to this Policy or our handling of information shall be resolved exclusively by confidential, binding arbitration administered by the American Arbitration Association (AAA) in New York County, NY before a single arbitrator, with the prevailing party entitled to reasonable attorneys' fees and costs. No class, collective, or representative actions are permitted. Jury trial is waived.</p>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
