

export class ShareFile {

    static getter<T>(_this2: any, property: T | { (): T }): T {
        if (typeof property === "function") {
            return (<{ (): T }>property).call(_this2);
        } else {
            return <T>property;
        }
    }

    private controller: UIDocumentInteractionController;

    open(args: any): boolean {
        if (args.path) {
            try {
                const appPath = this.getCurrentAppPath();
                const path = args.path.replace("~", appPath);

                this.controller = UIDocumentInteractionController.interactionControllerWithURL(NSURL.fileURLWithPath(path));
                this.controller.delegate = new UIDocumentInteractionControllerDelegateImpl2();

                let rect;
                if (args.rect) {
                    rect = CGRectMake(args.rect.x ? args.rect.x : 0, args.rect.y ? args.rect.y : 0, args.rect.width ? args.rect.width : 0, args.rect.height ? args.rect.height : 0);
                } else {
                    rect = CGRectMake(0, 0, 0, 0);
                }

                if (args.options) {
                    return this.controller.presentOptionsMenuFromRectInViewAnimated(
                        rect,
                        this.controller.delegate.documentInteractionControllerViewForPreview(this.controller),
                        args.animated ? true : false
                    );
                } else {
                    return this.controller.presentOpenInMenuFromRectInViewAnimated(
                        rect,
                        this.controller.delegate.documentInteractionControllerViewForPreview(this.controller),
                        args.animated ? true : false
                    );
                }


            }
            catch (e) {
                console.log("ShareFile: Open file failed");
            }
        } else {
            console.log('ShareFile: Please add a file path');
        }
        return false;
    }

    private getCurrentAppPath(): string {
        const currentDir = __dirname;
        const tnsModulesIndex = currentDir.indexOf("/tns_modules");

        // Module not hosted in ~/tns_modules when bundled. Use current dir.
        let appPath = currentDir;
        if (tnsModulesIndex !== -1) {
            // Strip part after tns_modules to obtain app root
            appPath = currentDir.substring(0, tnsModulesIndex);
        }
        return appPath;
    }
}

class UIDocumentInteractionControllerDelegateImpl2 extends NSObject implements UIDocumentInteractionControllerDelegate {
    public static ObjCProtocols = [UIDocumentInteractionControllerDelegate];

    public getViewController(): UIViewController {
        const app = ShareFile.getter(UIApplication, UIApplication.sharedApplication);
        return app.keyWindow.rootViewController;
    }

    public documentInteractionControllerViewControllerForPreview(controller: UIDocumentInteractionController) {
        return this.getViewController();
    }

    public documentInteractionControllerViewForPreview(controller: UIDocumentInteractionController) {
        return this.getViewController().view;
    }

}

