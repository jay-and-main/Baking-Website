import React from "react";
import Carousel from "../Components/Carousel/Carousel";

function Home() {
  return (
    <div>
      <Carousel />
      <hr style={{ marginTop: "50px" }} />
      <div className="home-about">
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          ABOUT
        </h1>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            margin: "40px",
            marginBottom: "50px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra
          volutpat nulla quis viverra. Donec a varius ipsum. Ut rutrum velit
          purus, luctus tempus libero ornare at. Nulla facilisi. Mauris sit amet
          magna consequat, vestibulum urna et, auctor mauris. Pellentesque ut
          volutpat turpis. Ut imperdiet semper orci bibendum interdum. Mauris et
          dignissim dui, et euismod ligula. Pellentesque vel purus lacus.
          Integer ullamcorper vitae mi ut facilisis. Aliquam vehicula purus a
          arcu vulputate, et condimentum leo tristique. Pellentesque lectus
          massa, ullamcorper quis nunc et, iaculis rhoncus leo.Quisque interdum
          dolor at tellus fermentum ultrices. Duis id sapien at est egestas
          auctor. Maecenas facilisis vitae arcu id mattis. Suspendisse ac
          ultricies odio. Etiam dictum eu arcu sit amet scelerisque. Etiam
          euismod egestas sapien, sit amet pellentesque tortor. Sed ultricies
          tortor lacus, non posuere nisl aliquam ut. Curabitur quis luctus nisi.
          In mattis, quam vel viverra vehicula, massa nisi scelerisque justo,
          sed dictum mauris lacus at enim. Vestibulum est orci, gravida quis
          sapien id, pharetra ullamcorper arcu. Sed ornare iaculis semper.
          Aliquam erat volutpat. Donec in quam tempus, consectetur velit eu,
          tempus risus. Nullam tincidunt ex sed enim euismod lobortis.
        </p>
        <hr style={{ marginBottom: "50px" }} />
      </div>
    </div>
  );
}

export default Home;
