const Footer = () => {

  return (
  <footer className="bg-white pt-20 pb-10 border-t border-slate-200">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">

        <div className="col-span-2 lg:col-span-2 space-y-6">
          <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-slate-900">
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path
                          d="m7.5 4.27 9 5.15"></path><path
                          d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path
                          d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
                    </span>
            <span className="text-xl tracking-tighter uppercase font-black">LITE.SHOP</span>
          </a>
          <p className="max-w-xs text-sm text-slate-500 leading-relaxed font-medium">
            Modern e-commerce experience built for speed and elegance. Discover the latest trends in outerwear,
            footwear and accessories.
          </p>
          <div className="flex items-center gap-4">
            <a href="#"
               className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white"
               aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#"
               className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white"
               aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>


        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">Shop</h4>
          <ul className="space-y-4 text-sm font-bold text-slate-500">
            <li><a href="#" className="transition-colors hover:text-blue-600">New Arrival</a></li>
            <li><a href="#" className="transition-colors hover:text-blue-600">Best Sellers</a></li>
            <li><a href="#" className="transition-colors hover:text-blue-600">Men Collection</a></li>
            <li><a href="#" className="transition-colors hover:text-blue-600">Women Collection</a></li>
          </ul>
        </div>


        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">Support</h4>
          <ul className="space-y-4 text-sm font-bold text-slate-500">
            <li><a href="#" className="transition-colors hover:text-blue-600">Order Status</a></li>
            <li><a href="#" className="transition-colors hover:text-blue-600">Shipping Policy</a></li>
            <li><a href="#" className="transition-colors hover:text-blue-600">Returns &amp; Exchanges</a></li>
            <li><a href="#" className="transition-colors hover:text-blue-600">FAQs</a></li>
          </ul>
        </div>


        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">Company</h4>
          <ul className="space-y-4 text-sm font-bold text-slate-500">
            <li><a href="#" className="transition-colors hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="transition-colors hover:text-blue-600">Sustainability</a></li>
            <li><a href="#" className="transition-colors hover:text-blue-600">Careers</a></li>
            <li><a href="#" className="transition-colors hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </div>

      <div
        className="mt-20 border-t border-slate-100 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          © 2026 LITE.SHOP. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#"
             className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Privacy
            Policy</a>
          <a href="#"
             className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Terms
            of Service</a>
        </div>
      </div>
    </div>
  </footer>
  )
}
export default Footer;
