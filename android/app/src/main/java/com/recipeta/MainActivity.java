package com.recipeta;

import com.facebook.react.ReactActivity;
// import com.reactnative.picker.PickerPackage; // import package 
// import com.facebook.react.shell.MainReactPackage;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */ 
   
  //  @Override
  //   protected List<ReactPackage> getPackages() {
  //       return Arrays.<ReactPackage>asList(
  //           new MainReactPackage(),
  //           new PickerPackage() // Add package 
  //       );
  //   }

    
    
  @Override
  protected String getMainComponentName() {
    return "recipeta";
  }
}
