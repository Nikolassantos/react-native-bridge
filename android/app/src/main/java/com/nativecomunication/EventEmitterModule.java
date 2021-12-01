package com.nativecomunication;

import android.graphics.Bitmap;
import android.util.Base64;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.io.ByteArrayOutputStream;
import java.util.HashMap;
import java.util.Map;

/**
 * Supports sending events to JavaScript.
 */
final class EventEmitterModule extends ReactContextBaseJavaModule {
    private static DeviceEventManagerModule.RCTDeviceEventEmitter eventEmitter = null;


    EventEmitterModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    /**
     * @return the name of this module. This will be the name used to {@code require()} this module
     * from JavaScript.
     */
    @Override
    public String getName() {
        return "EventEmitter";
    }


    @Override
    public void initialize() {
        super.initialize();
        eventEmitter = getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class);
    }



     @SuppressWarnings("ConstantConditions")
    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("MyEventName", "MyEventValue");
        return constants;
    }

    /**
     * To pass a JavaScript object instead of a simple string, create a {@link WritableNativeMap} and populate it.
     */
    static void emitEvent(@NonNull Bitmap photo) {
        int imageHeight = photo.getHeight();
        int imageWidth = photo.getWidth();

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        photo.compress(Bitmap.CompressFormat.JPEG, 100, baos);
        //this will convert image to byte[]
        byte[] byteArrayImage = baos.toByteArray();
        // this will convert byte[] to string
        String encodedImage = Base64.encodeToString(byteArrayImage, Base64.DEFAULT);

        final WritableMap eventMap = new WritableNativeMap();
        eventMap.putString("encodedImage", encodedImage);
        eventMap.putInt("imageHeight", imageHeight);
        eventMap.putInt("imageWidth", imageWidth);

         eventEmitter.emit("MyEventValue", eventMap);

    }
}