import { NextPage } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Rahul's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      {/*Hero Section */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      {/* About Section */}

      {/* Experience Section */}

      {/* Skills Section */}

      {/* Projects Section */}

      {/* Contact Me Section */}
    </div>
  );
};

export default Home;
