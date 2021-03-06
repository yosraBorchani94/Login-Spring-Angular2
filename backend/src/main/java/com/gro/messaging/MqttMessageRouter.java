package com.gro.messaging;

import org.springframework.integration.annotation.MessageEndpoint;
import org.springframework.integration.annotation.Router;
import org.springframework.messaging.handler.annotation.Header;

import com.gro.model.rpicomponent.RPiComponentType;

@MessageEndpoint
public class MqttMessageRouter {
    
    @Router(inputChannel="mqttRouterChannel")
    public String route(@Header("mqtt_topic") String topic) {
        String route = null;
        switch(topic) {
            case "TEMPERATURE":
                route = "temperatureTransformerChannel";
                break;
            case "HUMIDITY":
                route = "humidityTransformerChannel";
                break;
            case "TEMPERATURE_HUMIDITY":
                route = "temperatureHumidityTransformerChannel";
                break;
            case "NOTIFICATION.Alert":
                route = "notificationTransformerChannel";
                break;
            case "PROXIMITY.State":
                route = "proximityTransformerChannel";
                break;
            case "RELAY.State":
                route = "relayTransformerChannel";
                break;
            case "MOISTURE.State":
                route = "moistureTransformerChannel";
                break;
        }
        return route;
    }

}
