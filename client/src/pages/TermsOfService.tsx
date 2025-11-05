import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFileContract, FaBalanceScale, FaHandshake, FaGavel } from 'react-icons/fa';

export default function TermsOfService() {
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
                <FaFileContract className="mr-2" />
                Legal Agreement
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Terms of <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
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
                  <FaBalanceScale className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">Fair Terms</h3>
                <p className="text-sm text-gray-600">Clear and balanced agreement for all parties</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-100 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FaHandshake className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">Mutual Respect</h3>
                <p className="text-sm text-gray-600">Built on trust and professional standards</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FaGavel className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">Legal Protection</h3>
                <p className="text-sm text-gray-600">Protecting both your rights and ours</p>
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
                  <p>Legal Contact: legal@mrecai.com</p>
                </div>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    1) Acceptance of Terms
                  </h2>
                  <p className="leading-relaxed">By accessing our website, scheduling a consult, submitting a form, or engaging our Services, you agree to these Terms to the maximum extent permitted by law.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    2) Informational Nature; No Professional Advice; No Guarantee of Work Quality
                  </h2>
                  <p className="leading-relaxed">All content, communications, and recommendations are for informational purposes only and do not constitute legal, tax, investment, financial, or medical advice. We make no guarantee of work quality, outcomes, success, suitability, or fitness for a particular purpose. Decisions should be made with qualified professionals and by reviewing actual carrier policy forms and endorsements.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    3) Scope of Services & Third-Party Control
                  </h2>
                  <p className="leading-relaxed">Quotes, pricing, coverage, underwriting, and approvals are determined by third-party carriers and may change without notice. Binding coverage requires carrier approval and policy issuance. You are responsible for reviewing all policy terms, exclusions, conditions, and limits.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    4) Your Duties
                  </h2>
                  <p className="leading-relaxed mb-3">You agree to:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div>Provide accurate, complete, current information and promptly update changes;</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div>Verify submissions prior to quoting, binding, or servicing;</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div>Mitigate any damages and provide written notice of issues within 30 days of discovery and at least 60 days before initiating arbitration;</div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <div>Comply with applicable laws and obligations (e.g., tax, filings, notices, safety compliance, export/sanctions).</div>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    5) Ownership; License; IP Reservation
                  </h2>
                  <p className="leading-relaxed">All software, templates, documents, workflows, methods, and AI/automation systems are proprietary to MRECAI Technology and licensed to you on a limited, revocable, non-exclusive, non-transferable basis solely for your internal, lawful use. You will not copy, publish, resell, reverse engineer, data-mine, scrape, or create derivative works.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    6) Confidentiality (Mutual)
                  </h2>
                  <p className="leading-relaxed">Each party will protect the other's non-public information with at least reasonable care, use it only for the Services, and restrict disclosure to those with a need to know under similar obligations.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    7) Independent Contractors
                  </h2>
                  <p className="leading-relaxed">All consultants, subcontractors, and vendors engaged by MRECAI act as independent contractors. No employment, partnership, or agency relationship is created.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    8) AI & Automation Disclaimer
                  </h2>
                  <p className="leading-relaxed">AI-assisted communications, summaries, or recommendations are provided "as is" and may contain inaccuracies or omissions. They are not a substitute for carrier documents or professional advice.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    9) No Warranties; Use at Your Own Risk
                  </h2>
                  <p className="leading-relaxed uppercase">THE SERVICES (INCLUDING ALL CONTENT AND AI OUTPUT) ARE PROVIDED "AS IS" AND "AS AVAILABLE." TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, AND AVAILABILITY.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    10) Limitation of Liability
                  </h2>
                  <p className="leading-relaxed uppercase">TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL MRECAI OR ITS AFFILIATES, OWNERS, OFFICERS, EMPLOYEES, CONTRACTORS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS INTERRUPTION. THE TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS SHALL NOT EXCEED THE GREATER OF (A) $100 OR (B) THE AMOUNT YOU PAID TO MRECAI FOR THE SERVICE GIVING RISE TO THE CLAIM IN THE THREE (3) MONTHS BEFORE THE EVENT.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    11) Indemnification
                  </h2>
                  <p className="leading-relaxed mb-3">You agree to defend, indemnify, and hold harmless MRECAI and its affiliates from any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising from:</p>
                  <p className="leading-relaxed">(a) your use or misuse of the Services; (b) your breach of these Terms; (c) your violation of law or third-party rights; (d) inaccuracies or omissions in your submissions.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    12) Non-Disparagement
                  </h2>
                  <p className="leading-relaxed">You agree not to publish false, misleading, or defamatory statements about MRECAI. This does not limit lawful reviews based on your genuine experience.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    13) Third-Party Services; No Endorsement or Guarantee
                  </h2>
                  <p className="leading-relaxed">References or access to third parties (carriers, tools, advisors, vendors) are provided as a convenience only. We do not endorse or guarantee third-party services and are not responsible for their acts, omissions, or availability.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    14) Force Majeure
                  </h2>
                  <p className="leading-relaxed">We are not liable for delay or failure due to events beyond our reasonable control, including but not limited to natural disasters, labor disputes, utility failures, cyber incidents, vendor outages, pandemics, governmental actions, or acts of God.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    15) Export & Sanctions Compliance
                  </h2>
                  <p className="leading-relaxed">If you access AI or automation features from outside the U.S., you are responsible for complying with export control and sanctions laws.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    16) Marketing; Automatic Opt-In; Opt-Out
                  </h2>
                  <p className="leading-relaxed">By providing contact information or using the Services, you automatically consent to receive marketing, educational, and promotional communications by email, SMS/MMS, phone, and digital advertising until you opt out. Opt-out methods: Unsubscribe link, reply STOP, or email privacy@mrecai.com.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    17) Notices; Language; Headings
                  </h2>
                  <p className="leading-relaxed">We may provide official notices electronically to the addresses you supply; you may notice us at legal@mrecai.com. The English version governs. Section headings are for convenience only.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    18) Assignment; Successors
                  </h2>
                  <p className="leading-relaxed">We may assign our rights/obligations (e.g., merger, acquisition, financing). You may not assign without our prior written consent. These Terms bind permitted successors and assigns.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    19) Severability; Cumulative Remedies; Survival
                  </h2>
                  <p className="leading-relaxed">If any provision is invalid, it will be narrowed or severed to allow enforceability; remaining provisions remain in effect. Remedies are cumulative. Sections on ownership, confidentiality, warranties/disclaimers, limitations, indemnification, arbitration, governing law, and notices survive termination.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    20) Changes; Availability
                  </h2>
                  <p className="leading-relaxed">We may modify or discontinue any part of the Services at any time. We may update these Terms by posting a new Effective Date. Continued use constitutes acceptance.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    21) Binding Arbitration; Fee-Shifting; Class-Action & Jury Waiver
                  </h2>
                  <p className="leading-relaxed">Any dispute, claim, or controversy arising from or relating to these Terms or the Services shall be resolved exclusively by confidential, binding arbitration administered by the AAA in New York County, NY before a single arbitrator. The prevailing party may recover reasonable attorneys' fees and costs. No class, collective, or representative actions are permitted. You waive any right to a jury trial. Either party may seek temporary or preliminary injunctive relief in court to protect IP or confidential information pending arbitration.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    22) Governing Law & Venue
                  </h2>
                  <p className="leading-relaxed">These Terms are governed by the laws of the State of New York, without regard to conflicts principles. Subject to Section 21, exclusive venue for any permitted court action lies in New York County, NY.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                    23) Entire Agreement
                  </h2>
                  <p className="leading-relaxed">These Terms (including the Privacy Policy and any incorporated policies) constitute the entire agreement between you and MRECAI and supersede all prior or contemporaneous communications and understandings.</p>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
