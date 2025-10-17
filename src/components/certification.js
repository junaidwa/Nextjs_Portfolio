//here we show 2 certifications with images, titles, issuing organization, and issue date. and See more button and then go to certicate route
import Image from "next/image";
export default function Certification() {
  return (
    <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-300 rounded-lg p-4">
                <Image

                    src="/cert1.jpg"
                    alt="Certification 1"
                    width={400}
                    height={250}
                    className="mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-2">Full Stack Web Development</h3>
                <p className="text-gray-600 mb-1">Issued by: Coursera</p>
                <p className="text-gray-600">Issue Date: Jan 2023</p>
            </div>
            <div className="border border-gray-300 rounded-lg p-4">
                <Image

                    src="/cert2.jpg"
                    alt="Certification 2"
                    width={400}
                    height={250}
                    className="mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-2">JavaScript Algorithms and Data Structures</h3>
                <p className="text-gray-600 mb-1">Issued by: freeCodeCamp</p>
                <p className="text-gray-600">Issue Date: Dec 2022</p>
            </div>
        </div>
        <div className="text-center mt-6">
            <a

                href="/certifications"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
                See More Certifications
            </a>
        </div>
    </div>
  );
}