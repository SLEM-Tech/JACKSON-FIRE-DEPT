"use client";
import React, { useEffect, useState } from "react";
import AppLayout from "@src/components/AppLayout";
import { useSearchParams } from "next/navigation";
import { CompanyName } from "@constants";
import RefundPolicy from "./_components/RefundPolicy";
import DeliveryReturn from "./_components/DeliveryReturn";

const Page = () => {
	const searchParams = useSearchParams().toString();
	const search = searchParams.replace(/=$/, "");
	const [activeTab, setActiveTab] = useState<string>("termsOfUse");

	useEffect(() => {
		if (search === "terms-of-use") {
			setActiveTab("termsOfUse");
		} else if (search === "privacy-policy") {
			setActiveTab("privacyPolicy");
		} else if (search === "delivery-return") {
			setActiveTab("deliveryReturn");
		} else if (search === "refund-policy") {
			setActiveTab("refundPolicy");
		}
	}, [search]);

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<AppLayout>
			<main className='bg-white mx-auto mt-32 pb-24'>
				<section className='flex w-full flex-col items-center pt-8 xl:pt-16 gap-2 sm:gap-3 px-2 sm:px-8 md:px-16 text-center'>
					<h4 className='text-black text-base sm:text-xl font-semibold leading-[120%]'>
					Our Policies
					</h4>
					<h3 className='font-semibold text-xl sm:text-2xl md:text-3xl leading-[150%]'>
					Jackson Fire Dept Safe Stores Limited Policies
					</h3>
					<span className='text-xs sm:text-sm xl:text-base leading-[150%] text-gray-400 sm:max-w-3xl slg:max-w-2xl'>
					At Jackson Fire Dept Safe Stores Limited, we are dedicated to providing comprehensive fire safety equipment, professional advisory services, and fire prevention solutions to protect lives and property while ensuring compliance with safety regulations and industry standards.
					</span>
					<div className='flex gap-2 mt-3 xl:mt-8 text-[10px] xs:text-xs sm:text-sm slg:text-base leading-[140%] bg-[#F5F5F5] p-1 rounded-md transition'>
					<button
						className={`px-2 xl:px-4 py-2 rounded-md ${
						activeTab === "termsOfUse"
							? "bg-white text-black"
							: "bg-[#F5F5F5] text-[#667085]"
						}`}
						onClick={() => handleTabClick("termsOfUse")}
					>
						Terms of use
					</button>
					<button
						className={`px-2 xl:px-4 py-2 rounded-md ${
						activeTab === "privacyPolicy"
							? "bg-white text-black"
							: "bg-[#F5F5F5] text-[#667085]"
						}`}
						onClick={() => handleTabClick("privacyPolicy")}
					>
						Privacy Policy
					</button>
					<button
						className={`px-2 xl:px-4 py-2 rounded-md ${
						activeTab === "deliveryReturn"
							? "bg-white text-black"
							: "bg-[#F5F5F5] text-[#667085]"
						}`}
						onClick={() => handleTabClick("deliveryReturn")}
					>
						Delivery & Return
					</button>
					<button
						className={`px-2 xl:px-4 py-2 rounded-md ${
						activeTab === "refundPolicy"
							? "bg-white text-black"
							: "bg-[#F5F5F5] text-[#667085]"
						}`}
						onClick={() => handleTabClick("refundPolicy")}
					>
						Refund Policy
					</button>
					</div>
				</section>
				
				<div className='flex mx-auto w-full mt-4 md:mt-8 text-base leading-[155%] px-2 sm:px-0 sm:max-w-xl slg:max-w-2xl pb-20'>
					{activeTab === "termsOfUse" && (
					<div id='termsOfUse' className='text-[#667085]'>
						<h4 className='text-base sm:text-xl xl:text-2xl font-semibold text-black capitalize'>
						Terms of Use - Jackson Fire Dept Safe Stores Limited
						</h4>

						<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
						By engaging Jackson Fire Dept Safe Stores Limited for fire safety equipment, advisory services, or fire prevention solutions, you agree to the following comprehensive terms and conditions:
						</p>

						<ul className='list-disc pl-5 mt-2 space-y-2 text-xs md:text-sm xl:text-base'>
						<li>
							<span className='font-medium'>Fire Safety Equipment Supply:</span> Jackson Fire Dept Safe Stores supplies all classes of fire safety equipment including fire extinguishers, smoke detectors, fire alarms, sprinkler systems, emergency lighting, fire blankets, safety signage, and specialized firefighting accessories. All equipment meets Nigerian and international fire safety standards.
						</li>
						<li>
							<span className='font-medium'>Professional Advisory Services:</span> We provide expert fire prevention and safety advisory services to individuals and corporate bodies including fire risk assessments, safety audits, compliance consulting, emergency evacuation planning, and fire safety training programs. All advisors are certified fire safety professionals.
						</li>
						<li>
							<span className='font-medium'>Installation & Commissioning:</span> Professional installation services ensure proper equipment placement, functionality testing, and compliance with building codes. Installation includes system commissioning, user training, and comprehensive documentation. All installations are inspected and certified upon completion.
						</li>
						<li>
							<span className='font-medium'>Compliance Standards:</span> All fire safety equipment and services comply with Nigerian Building Code, National Fire Protection Association (NFPA) standards, and international safety regulations. Equipment certifications and compliance documentation provided with all installations.
						</li>
						<li>
							<span className='font-medium'>Emergency Response Support:</span> 24/7 emergency consultation available for fire safety incidents. Emergency equipment replacement and rapid response services available for critical situations. Coordination with local fire departments and emergency services when required.
						</li>
						<li>
							<span className='font-medium'>Maintenance & Inspection Services:</span> Regular maintenance programs ensure continued equipment functionality and compliance. Scheduled inspections, testing, and certification services available. Maintenance records maintained for regulatory compliance and insurance requirements.
						</li>
						<li>
							<span className='font-medium'>Training Programs:</span> Comprehensive fire safety training including equipment usage, emergency procedures, evacuation protocols, and fire prevention strategies. Training customized for different industries and risk levels. Certification provided upon successful completion.
						</li>
						<li>
							<span className='font-medium'>Payment Terms:</span> Equipment purchases require 50% deposit with balance due before installation. Advisory services billed based on project scope and duration. Emergency services may require immediate payment with premium rates for after-hours response.
						</li>
						<li>
							<span className='font-medium'>Safety Liability:</span> While we provide professional fire safety solutions, clients remain responsible for maintaining equipment and following safety protocols. Our liability is limited to equipment functionality and service delivery as specified in contracts.
						</li>
						</ul>

						<p className='mt-4 leading-[1.8] text-xs md:text-sm xl:text-base'>
						<span className='font-medium'>Equipment Warranties:</span> Fire safety equipment comes with manufacturer warranties and our installation guarantees. Regular maintenance extends warranty coverage and ensures optimal performance. Emergency replacement services available for warranty-covered failures.
						</p>

						<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
						<span className='font-medium'>Regulatory Updates:</span> We monitor changes in fire safety regulations and notify clients of compliance requirements. Equipment upgrade recommendations provided when regulations change or equipment becomes obsolete.
						</p>
					</div>
					)}

					{activeTab === "privacyPolicy" && (
					<div id='privacyPolicy' className='text-[#667085]'>
						<h4 className='text-sm sm:text-xl xl:text-2xl font-semibold text-black'>
						PRIVACY POLICY - JACKSON FIRE DEPT SAFE STORES LIMITED
						</h4>
						
						<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
						Jackson Fire Dept Safe Stores Limited is committed to protecting the privacy of our clients while providing comprehensive fire safety equipment and advisory services. This policy explains our data practices for fire safety and prevention services.
						</p>

						<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
						FIRE SAFETY SERVICES DATA COLLECTION
						</h4>
						
						<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-decimal pl-4'>
						<li>Client identification (name, contact details, company information, facility details)</li>
						<li>Property specifications and building layouts for fire safety assessments</li>
						<li>Equipment installation locations and system configurations</li>
						<li>Maintenance schedules and inspection records for compliance tracking</li>
						<li>Training participation records and certification information</li>
						<li>Emergency contact information for safety response coordination</li>
						<li>Insurance and regulatory compliance documentation</li>
						<li>Payment information and service billing records</li>
						</ul>

						<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
						DATA USAGE IN FIRE SAFETY OPERATIONS
						</h4>
						
						<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-disc pl-4'>
						<li>To provide fire safety equipment and professional installation services</li>
						<li>To conduct fire risk assessments and develop prevention strategies</li>
						<li>To schedule maintenance and ensure equipment compliance</li>
						<li>To provide emergency response support and consultation</li>
						<li>To manage training programs and issue safety certifications</li>
						<li>To ensure regulatory compliance and maintain inspection records</li>
						<li>To coordinate with emergency services and insurance providers</li>
						<li>To improve fire safety services through analysis and best practices</li>
						</ul>

						<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
						FIRE SAFETY DATA SECURITY
						</h4>
						
						<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
						We implement strict security protocols for all fire safety data including secure storage of building layouts, equipment specifications, and emergency procedures. Access to sensitive safety information is restricted to authorized personnel only. Emergency response data is maintained in secure systems with backup procedures for critical situations.
						</p>

						<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
						EMERGENCY SERVICES & REGULATORY SHARING
						</h4>
						
						<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
						Fire safety information may be shared with local fire departments, emergency services, and regulatory authorities as required for public safety and compliance purposes. Insurance companies receive necessary documentation for coverage verification. All sharing complies with safety regulations and privacy requirements with appropriate client notification.
						</p>

						<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
						CLIENT RIGHTS & SAFETY RECORDS
						</h4>
						
						<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
						Clients have the right to access their fire safety records, equipment documentation, and training certifications. Safety assessment reports and compliance documentation are provided for regulatory and insurance purposes. Maintenance records and inspection certificates remain accessible for verification. For fire safety privacy inquiries, contact safety@jacksonfiredept.com.ng.
						</p>
					</div>
					)}

					{activeTab === "deliveryReturn" && (
					<div id='deliveryReturn' className='text-[#667085]'>
						<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
						FIRE SAFETY EQUIPMENT DELIVERY & SERVICE POLICY - JACKSON FIRE DEPT SAFE STORES
						</h3>

						<p className='text-xs md:text-sm xl:text-base mb-4'>
						Jackson Fire Dept Safe Stores Limited ensures prompt delivery of fire safety equipment with professional installation services and comprehensive support to protect lives and property through reliable fire prevention and safety solutions.
						</p>

						<div className='mb-6'>
						<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
							Fire Safety Equipment Delivery
						</h4>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div>
							<h5 className='font-medium text-xs md:text-sm mb-1'>Emergency Equipment</h5>
							<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
								<li>Same-day delivery for critical fire safety equipment within Lagos</li>
								<li>Emergency replacement within 4 hours for essential systems</li>
								<li>24/7 emergency equipment supply and installation services</li>
								<li>Mobile service units for urgent on-site repairs and replacements</li>
							</ul>
							</div>
							<div>
							<h5 className='font-medium text-xs md:text-sm mb-1'>Standard Equipment</h5>
							<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
								<li>Next-day delivery for standard fire safety equipment orders</li>
								<li>Scheduled delivery coordination for large installations</li>
								<li>Free delivery for orders above ₦150,000 within Lagos metro</li>
								<li>National delivery: 3-7 business days with secure packaging</li>
							</ul>
							</div>
						</div>
						</div>

						<div className='mb-6'>
						<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
							Professional Installation Services
						</h4>
						<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>Certified technicians perform all fire safety equipment installations</li>
							<li>Site assessment and compliance verification before installation</li>
							<li>System testing and commissioning included with all installations</li>
							<li>User training and operation manuals provided for all systems</li>
							<li>Installation certification and compliance documentation issued</li>
							<li>Integration with existing building safety systems when applicable</li>
						</ul>
						</div>

						<div className='mb-6'>
						<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
							Fire Safety Advisory Services
						</h4>
						<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>Comprehensive fire risk assessments and safety audits</li>
							<li>Emergency evacuation planning and procedure development</li>
							<li>Regulatory compliance consulting and certification assistance</li>
							<li>Custom fire safety training programs for employees and management</li>
							<li>Ongoing safety consultation and support services</li>
							<li>Insurance compliance documentation and risk mitigation strategies</li>
						</ul>
						</div>

						<div className='mb-6'>
						<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
							Maintenance & Support Services
						</h4>
						<div className='space-y-3'>
							<div>
							<p className='font-medium text-xs md:text-sm'>Equipment Maintenance:</p>
							<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
								<li>Scheduled maintenance programs for all fire safety equipment</li>
								<li>Annual inspection and testing services for compliance</li>
								<li>Preventive maintenance to ensure optimal equipment performance</li>
								<li>Emergency repair services with priority response times</li>
							</ul>
							</div>
							<div>
							<p className='font-medium text-xs md:text-sm'>Equipment Guarantees:</p>
							<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
								<li>Manufacturer warranties honored with direct warranty service</li>
								<li>Installation workmanship guaranteed for 24 months</li>
								<li>Equipment performance verified and certified before delivery</li>
								<li>Free replacement for defective equipment within warranty period</li>
							</ul>
							</div>
						</div>
						</div>

						<div className='mb-6'>
						<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
							Emergency Response & Support
						</h4>
						<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>24/7 emergency consultation for fire safety incidents</li>
							<li>Rapid response for equipment failures during emergencies</li>
							<li>Coordination with local fire departments and emergency services</li>
							<li>Post-incident equipment assessment and replacement services</li>
							<li>Emergency evacuation support and safety guidance</li>
							<li>Insurance claim assistance and documentation support</li>
						</ul>
						</div>

						{/* <div className='mt-6 pt-4 border-t border-gray-200'>
						<h4 className='font-semibold text-xs md:text-sm xl:text-base mb-2'>
							Fire Safety Contact Information
						</h4>
						<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>Emergency Fire Safety: +234-801-234-5015 (24/7)</li>
							<li>Equipment Sales: sales@jacksonfiredept.com.ng</li>
							<li>Installation Services: install@jacksonfiredept.com.ng</li>
							<li>Advisory Services: safety@jacksonfiredept.com.ng</li>
							<li>Website: www.jacksonfiredept.com.ng</li>
						</ul>
						</div> */}
					</div>
					)}

					{activeTab === "refundPolicy" && (
					<div id='refundPolicy' className='text-[#667085]'>
						<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
						REFUND POLICY - JACKSON FIRE DEPT SAFE STORES LIMITED
						</h3>
						<p className='text-xs md:text-sm xl:text-base mb-4'>
						Effective Date: {new Date().toLocaleDateString('en-GB')}
						</p>

						<p className='text-xs md:text-sm xl:text-base mb-4'>
						At Jackson Fire Dept Safe Stores Limited, we are committed to delivering reliable fire safety equipment and professional advisory services that protect lives and property. Our refund policy ensures fair treatment while maintaining the highest safety standards and regulatory compliance.
						</p>

						<ul className='list-disc pl-5 space-y-3 leading-[1.8] text-xs md:text-sm xl:text-base'>
						<li>
							<span className='font-medium'>1. Fire Safety Equipment Refunds</span>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Full refund for defective equipment that fails safety testing and certification</li>
							<li>30-day return policy for unused equipment in original packaging with seals intact</li>
							<li>Equipment replacement if items fail to meet safety standards or specifications</li>
							<li>Installation refunds if equipment cannot be properly installed due to manufacturing defects</li>
							<li>Manufacturer warranty claims processed at no charge to customer</li>
							</ul>
						</li>

						<li>
							<span className='font-medium'>2. Installation & Service Refunds</span>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Full refund if installation fails to meet fire safety codes and regulations</li>
							<li>Prorated refunds for incomplete installations due to our inability to proceed</li>
							<li>No-cost corrective work for installations that fail compliance inspections</li>
							<li>Service call refunds if emergency response exceeds guaranteed timeframes</li>
							<li>Client-initiated cancellations subject to equipment delivered and work completed</li>
							</ul>
						</li>

						<li>
							<span className='font-medium'>3. Advisory Services Refunds</span>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Full refund if fire safety assessments do not meet professional standards</li>
							<li>Prorated refunds for incomplete advisory services due to our non-performance</li>
							<li>Training program refunds if content does not match advertised curriculum</li>
							<li>Compliance consulting refunds if recommendations fail regulatory approval</li>
							<li>Alternative consultation provided at no cost for service quality issues</li>
							</ul>
						</li>

						<li>
							<span className='font-medium'>4. Non-Refundable Items & Services</span>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Properly installed equipment that meets safety standards and passes inspection</li>
							<li>Fire safety training programs successfully completed with certification issued</li>
							<li>Custom-designed fire safety systems after client acceptance and installation</li>
							<li>Emergency service calls where assistance was provided as requested</li>
							<li>Fire safety equipment damaged by client negligence or misuse</li>
							</ul>
						</li>

						<li>
							<span className='font-medium'>5. Refund Request Process</span>
							<p className='mt-1'>To request a fire safety refund:</p>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Provide original purchase documentation and safety certificates</li>
							<li>Include detailed explanation with supporting evidence for defects</li>
							<li>Allow equipment inspection for safety compliance verification</li>
							</ul>
						</li>

						<li>
							<span className='font-medium'>6. Safety-Critical Refund Processing</span>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Emergency equipment refund requests processed within 24 hours</li>
							<li>Safety equipment testing and verification completed within 48 hours</li>
							<li>Installation refunds assessed by certified fire safety engineers</li>
							<li>Advisory service refunds reviewed within 3 business days</li>
							<li>Approved refunds processed within 5-7 business days with safety priority</li>
							</ul>
						</li>

						<li>
							<span className='font-medium'>7. Alternative Safety Solutions</span>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Equipment exchange for upgraded or alternative safety solutions</li>
							<li>Installation corrections performed at no charge for safety compliance</li>
							<li>Additional training provided for equipment operation and maintenance</li>
							<li>Service credits applied to future fire safety equipment or services</li>
							<li>Extended warranty coverage for equipment or installation issues</li>
							</ul>
						</li>

						<li>
							<span className='font-medium'>8. Regulatory & Insurance Compliance</span>
							<ul className='list-disc pl-5 mt-1 space-y-1'>
							<li>Refunds processed in compliance with fire safety regulations</li>
							<li>Insurance claim assistance for equipment failures and safety incidents</li>
							<li>Regulatory authority coordination for compliance-related refunds</li>
							<li>Safety documentation provided for all refund transactions</li>
							</ul>
						</li>
						</ul>

						{/* <div className='mt-6 pt-4 border-t border-gray-200'>
						<h4 className='font-semibold text-xs md:text-sm xl:text-base mb-2'>
							Contact Information
						</h4>
						<p className='text-xs md:text-sm xl:text-base'>
							For fire safety refunds and emergency assistance:
						</p>
						<ul className='list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm xl:text-base'>
							<li>Jackson Fire Dept Safe Stores Limited</li>
							<li>Email: refunds@jacksonfiredept.com.ng</li>
							<li>Safety Services: safety@jacksonfiredept.com.ng</li>
							<li>Phone: +234-801-234-5015</li>
							<li>Website: www.jacksonfiredept.com.ng</li>
						</ul>
						</div> */}
					</div>
					)}
				</div>
				</main>
		</AppLayout>
	);
};

export default Page;
