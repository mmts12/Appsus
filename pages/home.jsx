export class Home extends React.Component {
  componentDidMount() {
    console.log(this);
  }

  render() {
    return (
      <section className='home-page main-layout'>
        <h1>Appsus</h1>
        <h2>We Make Everything Pashuty</h2>
        <img src='../assets/imgs/homepage.png' />
        {/* <img src='../assets/imgs/desktop.png' /> */}
      </section>
    );
  }
}
