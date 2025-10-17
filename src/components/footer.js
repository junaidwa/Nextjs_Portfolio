//Footer contain copyright information and social media links
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 py-6 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Muhammad Junaid. All rights reserved.</p>
            <div className="mt-4 space-x-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                    Twitter
                </a>
            </div>
        </div>
    </footer>
    );
}
