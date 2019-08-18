import React from "react";
import "./Post.css";

import Menu from "../components/Menu";
import Content from "../components/Content";

export default function Post() {
  return (
    <div className="main-wrapper">
      <nav>
        <Menu />
      </nav>
      <section>
        <div className="post-container">
          <div className="post-card">
            <h1 className="post-header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <div className="post-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquet ultricies libero, non aliquam erat efficitur sed.
              Suspendisse potenti. Sed porttitor quam in ante aliquet mattis. Ut
              facilisis aliquet consectetur. Sed aliquet arcu sem, at aliquet
              tortor molestie ut. Nulla vel interdum metus. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Sed dapibus augue eget velit tristique bibendum. Cras
              euismod a metus interdum suscipit. Vivamus ut gravida mauris. Ut
              ac facilisis metus, eget eleifend tellus. Quisque vel eros
              ultrices est accumsan varius. Maecenas interdum urna eros, in
              posuere purus dictum at. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Vestibulum
              ultrices ornare purus ut luctus. Maecenas pellentesque, turpis ac
              hendrerit tempor, tellus libero euismod nunc, a eleifend justo
              enim id lectus. Nunc sagittis posuere purus, ac varius arcu
              sollicitudin eget. Mauris convallis, ante vitae efficitur
              lobortis, ex dui lobortis mauris, sit amet posuere dui mi ut
              sapien. Duis tortor tortor, cursus quis odio nec, iaculis pretium
              dolor. Vestibulum aliquam erat a odio molestie, vel malesuada
              tortor vulputate. Nullam mi magna, vestibulum et ullamcorper non,
              faucibus dapibus diam. Phasellus rutrum ligula sit amet urna
              venenatis malesuada. Sed interdum ut augue sit amet viverra. Donec
              maximus in lacus vitae rutrum. Praesent suscipit cursus eros et
              lobortis. Mauris sed euismod libero. Integer eget augue sit amet
              mi tincidunt vehicula. Etiam vitae bibendum nibh, sit amet
              bibendum lectus. Fusce dapibus vitae enim at vestibulum.
              Pellentesque iaculis eget quam in hendrerit. Curabitur in urna ut
              justo vulputate suscipit. Donec mattis egestas elementum. Mauris
              imperdiet elit sed condimentum placerat. Quisque nec suscipit
              justo. Vestibulum vulputate volutpat nibh a elementum. Nulla
              iaculis viverra nibh. Nullam fringilla augue id odio consectetur,
              at iaculis ante tristique. Nullam vitae est non purus eleifend
              porta ut vel nisl. Aliquam sed posuere enim. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Sed consectetur, elit
              imperdiet ullamcorper elementum, velit metus consequat dui, eget
              euismod justo dolor vitae mi. In ut condimentum ex, eu rhoncus
              erat. Curabitur pharetra nisi ac libero condimentum tempor. Proin
              dignissim placerat malesuada. Ut congue rutrum diam non
              ullamcorper. Pellentesque porta nisl eu tellus luctus, at dapibus
              magna ultrices. Praesent nec placerat tellus. Ut pellentesque nisl
              vitae urna sagittis, nec pulvinar libero tincidunt. Nulla massa
              augue, imperdiet a finibus vel, finibus id mauris. Praesent
              convallis elit in nulla luctus pellentesque. Nullam ornare
              tristique ante sed venenatis. Sed lobortis ac leo vel pulvinar.
              Quisque posuere odio massa, et pharetra arcu ultrices vel. Duis
              viverra, orci vitae blandit dignissim, elit urna dapibus nisi, id
              consequat elit enim ultrices ante. In convallis hendrerit mauris
              at laoreet. Nullam ultricies dapibus lorem, sit amet pellentesque
              magna bibendum vel. Vivamus eu enim massa.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
