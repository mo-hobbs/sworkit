import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonRippleEffect,
} from "@ionic/react";

import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import logo from "../images/sworkit-logo.svg";
import strength from "../images/category-strength.jpeg";
import cardio from "../images/category-cardio.jpeg";
import yoga from "../images/category-yoga.jpeg";
import stretching from "../images/category-stretching.jpeg";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonMenuButton autoHide={false} style={{ color: "black" }} />
            </IonButton>
          </IonButtons>
          <IonImg src={logo} style={{ width: "200px" }} />
        </IonToolbar>
      </IonHeader>
      <ExploreContainer name="Essentials" />
      <IonContent fullscreen className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>1 of 3</IonCol>
          </IonRow>
          <h4>Essentials</h4>
          <IonRow>
            <IonCol size-lg="3">
              <IonImg src={strength} />
            </IonCol>

            <IonCol size-lg="3">
              <IonImg src={cardio} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonImg src={yoga} />
            </IonCol>
            <IonCol>
              <IonImg src={stretching} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
