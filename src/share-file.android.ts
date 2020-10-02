import * as application from 'tns-core-modules/application';

export class ShareFile {
    open(args: any): void {
      if (args.path) {
        try {
          let intent = new android.content.Intent();

          intent.addFlags(android.content.Intent.FLAG_GRANT_READ_URI_PERMISSION);

          let uris = new java.util.ArrayList();
          let uri = this._getUriForPath(args.path);
          uris.add(uri);
          let builder = new android.os.StrictMode.VmPolicy.Builder();
          android.os.StrictMode.setVmPolicy(builder.build());

          intent.setAction(android.content.Intent.ACTION_SEND_MULTIPLE);
          intent.setType("message/rfc822");
          intent.putParcelableArrayListExtra(android.content.Intent.EXTRA_STREAM, uris);

          application.android.foregroundActivity.startActivity(android.content.Intent.createChooser(intent, args.intentTitle ? args.intentTitle : 'Open file:'));

        }
        catch (e) {
            console.log('ShareFile: Android intent failed');
        }
      } else {
        console.log('ShareFile: Please add a file path');
      }

    }

    fileExtension(filename) {
        return filename.split('.').pop();
    }
    fileName(filename) {
        return filename.split('/').pop();
    }

    _getUriForPath(path) {
          var file = new java.io.File(path);
          return androidx.core.content.FileProvider.getUriForFile(
              application.android.foregroundActivity ||
              application.android.startActivity,
              application.android.packageName + ".fileprovider",
              file
          );
      }

}