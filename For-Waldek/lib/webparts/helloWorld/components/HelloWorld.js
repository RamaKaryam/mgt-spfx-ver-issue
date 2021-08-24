var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { Person } from '@microsoft/mgt-react/dist/es6/spfx';
import { ViewType } from '@microsoft/mgt-spfx';
var HelloWorld = /** @class */ (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorld.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Person, { personQuery: "me", view: ViewType.image }))
        // <div className={ styles.helloWorld }>
        //   <div className={ styles.container }>
        //     <div className={ styles.row }>
        //       <div className={ styles.column }>
        //         <span className={ styles.title }>Welcome to SharePoint!</span>
        //         <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
        //         <p className={ styles.description }>{escape(this.props.description)}</p>
        //         <a href="https://aka.ms/spfx" className={ styles.button }>
        //           <span className={ styles.label }>Learn more</span>
        //         </a>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        );
    };
    return HelloWorld;
}(React.Component));
export default HelloWorld;
//# sourceMappingURL=HelloWorld.js.map