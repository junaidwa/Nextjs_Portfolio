//Here show 2,3 projects with images, titles, descriptions, and links to live demo and source code. and See more button and then go to projects route
import Image from "next/image";
export default function Projects() {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-300 rounded-lg p-4">
                    <Image

                        src="/cert1.jpg"
                        alt="Project 1"
                        width={400}
                        height={250}
                        className="mb-4 rounded"
                    />
                    <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                    <p className="text-gray-600 mb-4">
                        A personal portfolio website to showcase my projects and skills, built with Next.js and Tailwind CSS.
                    </p>
                    <div className="flex space-x-4">
                        <a

                            href="https://live-demo-link.com"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo
                        </a>
                        <a
                            href="https://source-code-link.com"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Source Code
                        </a>
                    </div>
                </div>
                <div className="border border-gray-300 rounded-lg p-4">
                    <Image
                        src="/cert2.jpg"
                        alt="Project 2"
                        width={400}
                        height={250}
                        className="mb-4 rounded"
                    />
                    <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
                    <p className="text-gray-600 mb-4">
                        An online store platform built with Next.js and Tailwind CSS, featuring product listings and a shopping cart.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="https://live-demo-link.com"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo
                        </a>
                        <a
                            href="https://source-code-link.com"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Source Code
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <a
                    href="/projects"
                    className="text-blue-600 hover:underline"
                >
                    See More Projects
                </a>
            </div>
        </div>
    );
}