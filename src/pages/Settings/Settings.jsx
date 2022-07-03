import Card from "components/Card";
import Icon from "components/Icon";
import "./settings.scss";

const Settings = () => (
  <div>
    <Card>
      <div className="settings">
        <h2 className="settings__title">
          <Icon height={24} width={24} name="config" />
          Configuración
        </h2>
      </div>
    </Card>
  </div>
);

export default Settings;
