import "../../public/styles.css"
import type { AppProps } from 'next/app'
 import Layout from '../components/layouts/mainLayout';
//import { UserAuthContextProvider } from "../utils/services";
import { usePathname } from 'next/navigation';

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const bgColor = pathname === "/" ? "bg-green-dark" : "bg-white";
  return(
    <Layout bgColor ={bgColor}>
   
   {pathname != "/game/recipe" &&  <div className='p-10 flex justify-between'>
        <h4>DishSwap</h4>
        <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_264_52)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 11.7188C0 11.0971 0.24693 10.501 0.686468 10.0615C1.12601 9.62193 1.72215 9.375 2.34375 9.375H47.6562C48.2779 9.375 48.874 9.62193 49.3135 10.0615C49.7531 10.501 50 11.0971 50 11.7188C50 12.3404 49.7531 12.9365 49.3135 13.376C48.874 13.8156 48.2779 14.0625 47.6562 14.0625H2.34375C1.72215 14.0625 1.12601 13.8156 0.686468 13.376C0.24693 12.9365 0 12.3404 0 11.7188ZM0 25C0 24.3784 0.24693 23.7823 0.686468 23.3427C1.12601 22.9032 1.72215 22.6562 2.34375 22.6562H47.6562C48.2779 22.6562 48.874 22.9032 49.3135 23.3427C49.7531 23.7823 50 24.3784 50 25C50 25.6216 49.7531 26.2177 49.3135 26.6573C48.874 27.0968 48.2779 27.3438 47.6562 27.3438H2.34375C1.72215 27.3438 1.12601 27.0968 0.686468 26.6573C0.24693 26.2177 0 25.6216 0 25ZM2.34375 35.9375C1.72215 35.9375 1.12601 36.1844 0.686468 36.624C0.24693 37.0635 0 37.6596 0 38.2812C0 38.9029 0.24693 39.499 0.686468 39.9385C1.12601 40.3781 1.72215 40.625 2.34375 40.625H47.6562C48.2779 40.625 48.874 40.3781 49.3135 39.9385C49.7531 39.499 50 38.9029 50 38.2812C50 37.6596 49.7531 37.0635 49.3135 36.624C48.874 36.1844 48.2779 35.9375 47.6562 35.9375H2.34375Z" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0_264_52">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>

      </div>}
         <Component {...pageProps} />
      {/* </UserAuthContextProvider> */}
       
           </Layout>
  
  )
}