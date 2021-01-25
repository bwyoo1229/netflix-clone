import React from 'react';
import jumboData from '../fixtures/jumbo';
import { Jumbotron } from '../components/';

export default function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map(item => (
        <Jumbotron key={item.id} direction={item.direction}>
          {/* left pane */}
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
          </Jumbotron.Pane>
          {/* right pane */}
          <Jumbotron.Pane>
            <Jumbotron.Video autoPlay playsInline muted loop>
              <source src={item.video} type="video/mp4" />
            </Jumbotron.Video>
            <Jumbotron.Image
              src={item.image}
              alt={item.alt}
              mobileImg={JSON.parse(item.small)}
            />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
