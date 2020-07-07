#import <UIKit/UIKit.h>
#import <UMReactNativeAdapter/UMModuleRegistryAdapter.h>

#import <UMCore/UMAppDelegateWrapper.h>
#import <React/RCTBridgeDelegate.h>

@interface AppDelegate : UMAppDelegateWrapper <UIApplicationDelegate, RCTBridgeDelegate>
@property (nonatomic, strong) UMModuleRegistryAdapter *moduleRegistryAdapter;

@property (nonatomic, strong) UIWindow *window;

@end
