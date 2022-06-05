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
  IonCard,
  IonCardContent,
  IonCardTitle,
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
            <IonCol>
              <IonCard>
                <IonCardContent>
                  <IonRow>
                    <IonCol>
                      Sworkit's preventative exercise program may be offered
                      free through your benefit provider or health insurance.
                    </IonCol>
                    <IonCol size="5">
                      <IonButton style={{ color: "white" }}>
                        Check Eligibility
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <h4>Essentials</h4>
          <IonRow>
            <IonCol>
              <IonCard
                className="category"
                style={{ backgroundImage: `url(${strength})` }}
              >
                <IonCardTitle>STRENGTH</IonCardTitle>
              </IonCard>
            </IonCol>

            <IonCol>
            <IonCard
                className="category"
                style={{ backgroundImage: `url(${cardio})` }}
              >
                <IonCardTitle>CARDIO</IonCardTitle>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonCard
                className="category"
                style={{ backgroundImage: `url(${yoga})` }}
              >
                <IonCardTitle>YOGA</IonCardTitle>
              </IonCard>
            </IonCol>
            <IonCol>
            <IonCard
                className="category"
                style={{ backgroundImage: `url(${stretching})` }}
              >
                <IonCardTitle>STRETCHING</IonCardTitle>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
