/**
 * Version de SystemJS dédié à la production.
 * Les paquets sont chargés depuis le web.
 */
(function (global) {
    System.config({
        paths: {
            'npm:': 'https://unpkg.com/' // Le nouvel alias
        },

        map: {
            app: 'dist',
            '@angular/core': 'npm:@angular/core@13.2.0/bundles/core.umd.min.js',
            '@angular/common': 'npm:@angular/common@13.2.0/bundles/common.umd.min.js',
            '@angular/compiler': 'npm:@angular/compiler@13.2.0/bundles/compiler.umd.min.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser@13.2.0/bundles/platform-browser.umd.min.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@13.2.0/bundles/platform-browser-dynamic.umd.min.js',
            '@angular/common/http': 'npm:@angular/common@13.2.0/bundles/common-http.umd.min.js',
            '@angular/router': 'npm:@angular/router@13.2.0/bundles/router.umd.min.js',
            '@angular/forms': 'npm:@angular/forms@13.2.0/bundles/forms.umd.min.js',
            'rxjs': 'npm:rxjs@7.4.0',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api@0.13.0/bundles/in-memory-web-api.umd.js',
            'tslib': 'npm:tslib/tslib.js'
        },
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                main: 'index.js',
                defaultExtension: 'js'
            },
            'rxjs/operators': {
                main: 'index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);