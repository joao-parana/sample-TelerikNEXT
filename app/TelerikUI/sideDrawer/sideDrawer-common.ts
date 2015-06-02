import definition = require("./sideDrawer");
import dependencyObservable = require("ui/core/dependency-observable");
import proxy = require("ui/core/proxy");
import view = require("ui/core/view");

function onDrawerLocationPropertyChanged(eventData: dependencyObservable.PropertyChangeData) {
    var classInstance = <SideDrawer>eventData.object;
    classInstance._onDrawerLocationPropertyChanged(eventData);
}

function onDrawerContentWidthChanged(eventData: dependencyObservable.PropertyChangeData) {
    var classInstance = <SideDrawer>eventData.object;
    classInstance._onDrawerContentWidthChanged(eventData);
}
function onDrawerTransitionChanged(eventData: dependencyObservable.PropertyChangeData){
    var classInstance = <SideDrawer>eventData.object;
    classInstance._onDrawerTransitionChanged(eventData);
}

export enum SideDrawerLocation {
     Left,
     Right,
     Top,
     Bottom
 };

export class SideDrawer extends view.View implements definition.SideDrawer {

    public static drawerTransitionProperty = new dependencyObservable.Property(
        "drawerTransition",
        "SideDrawer",
        new proxy.PropertyMetadata(
            280,
            dependencyObservable.PropertyMetadataSettings.AffectsLayout,
            onDrawerTransitionChanged
        ));
    get drawerTransition(): definition.DrawerTransitionBase {
        return this._getValue(SideDrawer.drawerTransitionProperty);
    }
    set drawerTransition(value: definition.DrawerTransitionBase) {
        this._setValue(SideDrawer.drawerTransitionProperty, value);
    }
    public _onDrawerTransitionChanged(eventData : dependencyObservable.PropertyChangeData){};

    public static drawerContentWidthProperty = new dependencyObservable.Property(
        "drawerContentWidth",
        "SideDrawer",
        new proxy.PropertyMetadata(
            280,
            dependencyObservable.PropertyMetadataSettings.AffectsLayout,
            onDrawerContentWidthChanged
        ));
    get drawerContentWidth(): number {
        return this._getValue(SideDrawer.drawerContentWidthProperty);
    }
    set drawerContentWidth(value: number) {
        this._setValue(SideDrawer.drawerContentWidthProperty, value);
    }
    public _onDrawerContentWidthChanged(eventData : dependencyObservable.PropertyChangeData){};

    public static drawerLocationProperty = new dependencyObservable.Property(
        "drawerLocation",
        "SideDrawer",
        new proxy.PropertyMetadata(
            280,
            dependencyObservable.PropertyMetadataSettings.AffectsLayout,
            onDrawerLocationPropertyChanged
        ));
    get drawerLocation(): definition.SideDrawerLocation {
        return this._getValue(SideDrawer.drawerLocationProperty);
    }
    set drawerLocation(value: definition.SideDrawerLocation) {
        this._setValue(SideDrawer.drawerLocationProperty, value);
    }
    public _onDrawerLocationPropertyChanged(eventData : dependencyObservable.PropertyChangeData){};

    public static drawerContentProperty = new dependencyObservable.Property(
        "drawerContent",
        "SideDrawer",
        new proxy.PropertyMetadata(
            undefined,
            dependencyObservable.PropertyMetadataSettings.AffectsLayout
        ));
    get drawerContent(): view.View {
        return this._getValue(SideDrawer.drawerContentProperty);
    }
    set drawerContent(value: view.View) {
        this._setValue(SideDrawer.drawerContentProperty, value);
    }

    public static mainContentProperty = new dependencyObservable.Property(
        "mainContent",
        "SideDrawer",
        new proxy.PropertyMetadata(
            undefined,
            dependencyObservable.PropertyMetadataSettings.AffectsLayout
        ));
    get mainContent(): view.View {
        return this._getValue(SideDrawer.mainContentProperty);
    }
    set mainContent(value: view.View) {
        this._setValue(SideDrawer.mainContentProperty, value);
    }

    get _childrenCount(): number {
        var count = 0;
        if (this.drawerContent) {
            count++;
        }
        if (this.mainContent) {
            count++;
        }

        return count;
    }

    public _eachChildView(callback: (child: view.View) => boolean) {
        if (this.mainContent) {
            callback(this.mainContent);
        }

        if (this.drawerContent) {
            callback(this.drawerContent);
        }
    }
}
