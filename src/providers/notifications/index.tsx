import React, { createContext, useState, useContext } from "react";
import ToastAtom, { ToastAtomProps } from "../../components/atoms/toast";
import { ToastContainer } from "react-bootstrap";

interface ToastProviderProps {
  children: React.ReactNode;
}

type Notification = ToastAtomProps & { id: number; show: boolean };

interface ToastContextProps {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  removeNotification: (id: number) => void;
  updateNotificationShow: (id: number, show: boolean) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notification: Notification) => {
    const newNotification = { ...notification, id: Date.now(), show: true };
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      newNotification,
    ]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  const updateNotificationShow = (id: number, show: boolean) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, show } : notification
      )
    );
  };

  const contextValue: ToastContextProps = {
    notifications,
    addNotification,
    removeNotification,
    updateNotificationShow,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainer className="position-fixed bottom-0 end-0 ">
        {notifications.map((notification) => (
          <ToastAtom
            key={notification.id}
            variant={notification.variant}
            title={notification.title}
            showNotification={notification.show}
            isList={true}
            setShow={(show) =>
              updateNotificationShow(notification.id, show as boolean)
            }
          >
            {notification.children}
          </ToastAtom>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export { ToastProvider, useToast };
