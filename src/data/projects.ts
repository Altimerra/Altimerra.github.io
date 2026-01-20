export interface Project {
	slug: string;
	title: string;
	description: string;
	tags: string[];
	content: string; // HTML or Markdown string for the full page
	year: string;
}

export const projects: Project[] = [
	{
		slug: "dexterous-robotic-finger",
		title: "Dexterous Robotic Finger",
		description: "Developed a robotic finger with joint-mobility modulation for adaptive grasping. Published at MERCon 2024 (Best Paper Nominee).",
		tags: ["Robotics", "Research", "Control Systems"],
		year: "2024",
		content: `
			<p>Grasping is a fundamental capability for robots, yet adaptive grasping of irregular objects remains a challenge. This project introduced a novel robotic finger design capable of modulating its joint mobility to adapt to various object shapes.</p>
			<h3>Key Contributions</h3>
			<ul>
				<li>Designed a underactuated mechanism with variable stiffness.</li>
				<li>Implemented a control algorithm for adaptive grasping.</li>
				<li>Validated performance through grasping experiments with daily objects.</li>
			</ul>
			<p>The work was presented at the Moratuwa Engineering Research Conference (MERCon) 2024 and received a nomination for the Best Paper Award in the Mechanical Systems track.</p>
		`
	},
	{
		slug: "trans-radial-prosthetic-device",
		title: "Trans-radial Prosthetic Device",
		description: "Designed a patent-pending mechanism for a prosthetic device. Involved detailed design, math modeling, and prototype fabrication.",
		tags: ["Bionics", "Prosthetics", "C++", "Python"],
		year: "2023",
		content: `
			<p>This project focused on developing an affordable and functional trans-radial prosthetic hand. The core innovation lies in a novel actuation mechanism that mimics natural hand movements.</p>
			<h3>Project Scope</h3>
			<ul>
				<li><strong>Mechanism Design:</strong> Developed a patent-pending linkage system.</li>
				<li><strong>Simulation:</strong> Performed kinematic and dynamic analysis using MATLAB and Python.</li>
				<li><strong>Prototyping:</strong> Fabricated using 3D printing and CNC machining.</li>
				<li><strong>Control:</strong> Implemented EMG signal processing for intuitive control.</li>
			</ul>
		`
	},
	{
		slug: "heart-on-a-chip",
		title: "Heart-on-a-chip MEMS Device",
		description: "Designed a Microfluidic Chip and Piezoelectric diaphragm. Performed flow and structural analysis using COMSOL.",
		tags: ["MEMS", "COMSOL", "Biomedical"],
		year: "2023",
		content: `
			<p>Microfluidic organ-on-a-chip devices are revolutionizing drug testing. This project involved the design and simulation of a "Heart-on-a-chip" device to mimic the mechanical and fluidic environment of heart tissue.</p>
			<h3>Methodology</h3>
			<ul>
				<li>Designed the microfluidic grasp using CAD tools.</li>
				<li>Simulated blood flow dynamics using COMSOL Multiphysics.</li>
				<li>Analyzed the structural integrity of the piezoelectric diaphragm used for pumping.</li>
			</ul>
		`
	},
	{
		slug: "industrial-optimization",
		title: "Industrial Optimization",
		description: "Field visits and process simulation for Lankem PLC to optimize production processes.",
		tags: ["Optimization", "Simulation", "Industrial Eng"],
		year: "2022",
		content: `
			<p>Collaborated with Lankem PLC to identify bottlenecks and optimize their production line. The project involved extensive data collection and process modeling.</p>
			<p>We used discrete event simulation to model the factory floor and proposed layout changes that predicted a 15% increase in throughput.</p>
		`
	}
];
