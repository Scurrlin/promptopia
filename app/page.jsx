import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Powerful AI Prompts</span>
    </h1>
    <p className='desc text-center'>
      Promptopia is an open-source library where you can discover, create and share creative prompts
    </p>

    <Feed />
  </section>
);

export default Home;