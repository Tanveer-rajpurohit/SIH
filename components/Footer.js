export default function Footer() {
    return (
        <footer className="bg-[#FDFDFD] py-4 border-t">
            <div className="container mx-auto">
                {/* Footer Links */}
                <div className="flex justify-center flex-wrap gap-4 text-gray-600 text-sm">
                    <a href="#" className="hover:underline">About Us</a>
                    <a href="#" className="hover:underline">Help Center</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Cookie Policy</a>
                    <a href="#" className="hover:underline">Accessibility</a>
                    <a href="#" className="hover:underline">Advertising Info</a>
                    <a href="#" className="hover:underline">Blog</a>
                    <a href="#" className="hover:underline">Careers</a>
                    <a href="#" className="hover:underline">Brand Resources</a>
                    <a href="#" className="hover:underline">Advertising</a>
                    <a href="#" className="hover:underline">Marketing</a>
                    <a href="#" className="hover:underline">Business Solutions</a>
                    <a href="#" className="hover:underline">Developers</a>
                    <a href="#" className="hover:underline">Directory</a>
                    <a href="#" className="hover:underline">Settings</a>
                </div>

                {/* Footer Copyright */}
                <div className="flex justify-center mt-4 text-gray-500 text-sm">
                    <p>&copy; 2024 YourWebsite. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
