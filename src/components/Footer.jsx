

const Footer = () => {
    return (
        <footer className="bg-red-900 text-white py-10 mt-5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="font-bold text-lg">Yummy Sensei</h3>
                        <p className="mt-2">Hacer del mundo un lugar mejor a través de la excelencia culinaria.</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h4 className="font-bold">Soluciones</h4>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#" className="hover:underline">Marketing</a></li>
                            <li><a href="#" className="hover:underline">Analytics</a></li>
                            <li><a href="#" className="hover:underline">Comercio</a></li>
                            <li><a href="#" className="hover:underline">Información</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h4 className="font-bold">Support</h4>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#" className="hover:underline">Precios</a></li>
                            <li><a href="#" className="hover:underline">Documentación</a></li>
                            <li><a href="#" className="hover:underline">Guías</a></li>
                            <li><a href="#" className="hover:underline">API Status</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h4 className="font-bold">Company</h4>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#" className="hover:underline">Acerca de</a></li>
                            <li><a href="#" className="hover:underline">Blog</a></li>
                            <li><a href="#" className="hover:underline">Empleos</a></li>
                            <li><a href="#" className="hover:underline">Prensa</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center border-t border-zinc-100 pt-6">
                    <p>&copy; 2024 Yummy Sensei. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
