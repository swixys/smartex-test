import Layouts from "../layouts/Layouts";
import Intro from "../components/Intro/Intro";
import {getIntro,getAllPages} from "../lib/api";


export default function Home({intro}) {
  return (
     <>
         <Layouts>
             <Intro />
         </Layouts>
     </>
  )
}
export async function getServerSideProps() {
    const intro = await getIntro();
    console.log(intro);


    return {
        props: {
            intro
        }
    }
}
