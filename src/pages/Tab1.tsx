import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import logo from "../images/sworkit-logo.svg";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonButtons slot="start">
          <IonMenuButton autoHide={false} />
        </IonButtons>
        <IonButtons slot="secondary">
          <IonButton>
            <IonIcon slot="icon-only" icon={logo} />
          </IonButton>
        </IonButtons>
        <IonTitle>Left side menu toggle</IonTitle>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
