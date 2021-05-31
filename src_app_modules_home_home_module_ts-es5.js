(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkcv"] = self["webpackChunkcv"] || []).push([["src_app_modules_home_home_module_ts"], {
    /***/
    4978:
    /*!****************************************!*\
      !*** ./src/app/core/pipe/join.pipe.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JoinPipe": function JoinPipe() {
          return (
            /* binding */
            _JoinPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _JoinPipe = /*#__PURE__*/function () {
        function _JoinPipe() {
          _classCallCheck(this, _JoinPipe);
        }

        _createClass(_JoinPipe, [{
          key: "transform",
          value: function transform(value) {
            var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
            var splitter = arguments.length > 2 ? arguments[2] : undefined;

            if (value === '') {
              return '';
            }

            if (typeof value === 'string') {
              value.split(splitter);
            }

            if (Array.isArray(value)) {
              value = value.join(separator);
            }

            return value;
          }
        }]);

        return _JoinPipe;
      }();

      _JoinPipe.ɵfac = function JoinPipe_Factory(t) {
        return new (t || _JoinPipe)();
      };

      _JoinPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "join",
        type: _JoinPipe,
        pure: true
      });
      /***/
    },

    /***/
    8646:
    /*!************************************************************************!*\
      !*** ./src/app/modules/home/components/category/category.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoryComponent": function CategoryComponent() {
          return (
            /* binding */
            _CategoryComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_enums_experience_title_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/enums/experience-title.enum */
      4433);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function CategoryComponent_div_0_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.date.join(" - "));
        }
      }

      function CategoryComponent_div_0_h4_2_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("- ", ctx_r5.position, "");
        }
      }

      function CategoryComponent_div_0_h4_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CategoryComponent_div_0_h4_2_span_2_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.position);
        }
      }

      function CategoryComponent_div_0_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "https://" + ctx_r4.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.link);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "title--category": a0,
          "title--experience": a1
        };
      };

      function CategoryComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CategoryComponent_div_0_span_1_Template, 2, 1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CategoryComponent_div_0_h4_2_Template, 3, 2, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CategoryComponent_div_0_a_3_Template, 2, 2, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, ctx_r0.type === ctx_r0.titleType.category, ctx_r0.type === ctx_r0.titleType.experience));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx_r0.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx_r0.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.link);
        }
      }

      function CategoryComponent_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "https://" + ctx_r1.git, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.git);
        }
      }

      var _CategoryComponent = function _CategoryComponent() {
        _classCallCheck(this, _CategoryComponent);

        this.type = _models_enums_experience_title_enum__WEBPACK_IMPORTED_MODULE_0__.ExperienceTitle.experience;
        this.titleType = _models_enums_experience_title_enum__WEBPACK_IMPORTED_MODULE_0__.ExperienceTitle;
      };

      _CategoryComponent.ɵfac = function CategoryComponent_Factory(t) {
        return new (t || _CategoryComponent)();
      };

      _CategoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CategoryComponent,
        selectors: [["app-category"]],
        inputs: {
          date: "date",
          title: "title",
          position: "position",
          git: "git",
          link: "link",
          type: "type"
        },
        decls: 2,
        vars: 2,
        consts: [[3, "ngClass", 4, "ngIf"], ["target", "_blank", "class", "title--project", 3, "href", 4, "ngIf"], [3, "ngClass"], ["class", "title--date", 4, "ngIf"], ["class", "title--header", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], [1, "title--date"], [1, "title--header"], ["class", "position", 4, "ngIf"], [1, "position"], ["target", "_blank", 3, "href"], ["target", "_blank", 1, "title--project", 3, "href"]],
        template: function CategoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CategoryComponent_div_0_Template, 4, 7, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CategoryComponent_a_1_Template, 2, 2, "a", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.title || ctx.position || ctx.link);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.git);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
        styles: [".title--experience[_ngcontent-%COMP%], .title--category[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 8px;\n}\n.title--experience[_ngcontent-%COMP%]:before, .title--category[_ngcontent-%COMP%]:before {\n  content: \"\";\n  height: 110%;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 15px;\n  background-color: #362d2e;\n  position: absolute;\n  left: -32px;\n}\n.title--header[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: uppercase;\n}\n.title--date[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 1.1rem;\n}\n.title--category[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.title--category[_ngcontent-%COMP%]:before {\n  width: 5px;\n  left: -12px;\n}\n.title--project[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxhYnN0cmFjdHNcXF92YXJpYWJsZXMuc2NzcyIsImNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FBYUEsV0FBQTtBQW9CQSxXQUFBO0FDL0JBOztFQUVFLGtCQUFBO0VBQ0Esa0JEZVc7QUNiYjtBQUFFOztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCRHlCSTtFQ3hCSixrQkFBQTtFQUNBLFdBQUE7QUFHSjtBQUNBO0VBQ0UsU0FBQTtFQUNBLHlCQUFBO0FBRUY7QUFDQTtFQUNFLHlCRGlCYztFQ2hCZCxpQkRJZTtBQ0ZqQjtBQUNBO0VBRUUsYUFBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUNKO0FBR0E7RUFDRSx5QkRFYztBQ0ZoQiIsImZpbGUiOiJjYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1PQklMRSBTSVpJTkcgKi9cclxuLy8keHM6IDMyMHB4OyAvL21vYmlsZVxyXG4vLyRzbTogNDgxcHg7IC8vdGFibGV0c1xyXG4vLyRtZDogNzY5cHg7IC8vc21hbGwgZGV2aWNlc1xyXG4vLyRsZzogMTAyNXB4OyAvL2xhcmdlIC8gUENcclxuLy8keGw6IDEyMDFweDsgIC8vZXh0cmEgbGFyZ2VcclxuXHJcbiR4czogMzIwcHg7IC8vbW9iaWxlXHJcbiRzbTogNjQwcHg7IC8vdGFibGV0c1xyXG4kbWQ6IDcyMHB4OyAvL3NtYWxsIGRldmljZXNcclxuJGxnOiAyMDltbTsgLy9sYXJnZSAvIFBDXHJcbi8vJHhsOiAxMjAxcHg7ICAvL2V4dHJhIGxhcmdlXHJcblxyXG4vKiBTSVpJTkcgKi9cclxuJHBhZ2UtaGVpZ2h0OiAyOTdtbTtcclxuJHNwYWNlOiAzMnB4O1xyXG4kc3BhY2UtYmV0d2Vlbi1lbGVtZW50czogMThweDtcclxuJGJvcmRlci1zaXplOiA1cHg7XHJcbiRsaW5lLWhlaWdodDogMThweDtcclxuJHBhcmFncmFwaC1tYXJnaW46IDEycHg7XHJcbiRsaW5lLXNwYWNlOiA4cHg7XHJcblxyXG4kYXZhdGFyLXNpemU6IDEyNXB4O1xyXG5cclxuLy9mb250XHJcbiRmb250LXNpemU6IDEwcHg7XHJcbiRmb250LXNpemUteHM6IDEycHg7XHJcblxyXG4kdGV4dC1oZWFkZXItZm9udC1zaXplOiAxLjdyZW07XHJcbiR0ZXh0LWZvbnQtc2l6ZTogMS4ycmVtO1xyXG4kdGV4dC1kYXRlLXNpemU6IDEuMXJlbTtcclxuJHVzZXItZGV0YWlscy1mb250LXNpemU6IDNyZW07XHJcblxyXG4vKiBDT0xPUlMgKi9cclxuXHJcbiR0aGVtZS1kYXJrOiAjMzQzNjM3O1xyXG4kdGhlbWUtd2hpdGU6ICNmZmY7XHJcbiRtYWluLWNvbG9yOiAjZTZlNmU4O1xyXG4kY29sb3I6ICMzNjJkMmU7XHJcbiRjb2xvci1pbnZlcnRlZDogI2ZmZjtcclxuXHJcbiRmb250LWFjY2VudC0xOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiRmb250LWFjY2VudC0yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4udGl0bGUtLWV4cGVyaWVuY2UsXHJcbi50aXRsZS0tY2F0ZWdvcnkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAkbGluZS1zcGFjZTtcclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBoZWlnaHQ6IDExMCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLSRzcGFjZTtcclxuICB9XHJcbn1cclxuXHJcbi50aXRsZS0taGVhZGVyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnRpdGxlLS1kYXRlIHtcclxuICBjb2xvcjogJGZvbnQtYWNjZW50LTI7XHJcbiAgZm9udC1zaXplOiAkdGV4dC1kYXRlLXNpemU7XHJcbn1cclxuXHJcbi50aXRsZS0tY2F0ZWdvcnkge1xyXG4gICRsaW5lLXBvc2l0aW9uOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBsZWZ0OiAtJGxpbmUtcG9zaXRpb247XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUtLXByb2plY3Qge1xyXG4gIGNvbG9yOiAkZm9udC1hY2NlbnQtMjtcclxufVxyXG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    9100:
    /*!****************************************************************************!*\
      !*** ./src/app/modules/home/components/experience/experience.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExperienceComponent": function ExperienceComponent() {
          return (
            /* binding */
            _ExperienceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_enums_experience_title_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/enums/experience-title.enum */
      4433);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _category_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../category/category.component */
      8646);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _c0 = function _c0(a0) {
        return {
          "no-margin": a0
        };
      };

      function ExperienceComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-category", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, !ctx_r0.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", category_r1.title)("date", category_r1.date)("type", ctx_r0.categoryType);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", category_r1.description, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        }
      }

      var _ExperienceComponent = function _ExperienceComponent() {
        _classCallCheck(this, _ExperienceComponent);

        this.subcategory = [];
        this.categoryType = _models_enums_experience_title_enum__WEBPACK_IMPORTED_MODULE_0__.ExperienceTitle.category;
      };

      _ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) {
        return new (t || _ExperienceComponent)();
      };

      _ExperienceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ExperienceComponent,
        selectors: [["app-experience"]],
        inputs: {
          title: "title",
          date: "date",
          position: "position",
          description: "description",
          subcategory: "subcategory"
        },
        decls: 5,
        vars: 5,
        consts: [[3, "date", "title", "position"], [1, "text-paragraph", "experience__description"], [1, "experience__category-wrapper"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "title", "date", "type"], [1, "text-paragraph", 3, "innerHTML"]],
        template: function ExperienceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-category", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ExperienceComponent_div_4_Template, 3, 7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("date", ctx.date)("title", ctx.title)("position", ctx.position);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.description, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.subcategory);
          }
        },
        directives: [_category_category_component__WEBPACK_IMPORTED_MODULE_1__.CategoryComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
        styles: [".experience__description[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.experience__category-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(1, auto);\n  grid-gap: 18px;\n  gap: 18px;\n  margin-top: 12px;\n}\n@media screen and (min-width: 720px), print {\n  .experience__category-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, auto);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxhYnN0cmFjdHNcXF92YXJpYWJsZXMuc2NzcyIsImV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUE7QUFhQSxXQUFBO0FBb0JBLFdBQUE7QUMvQkE7RUFDRSxtQkRnQmlCO0FDZG5CO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxjRE91QjtFQ1B2QixTRE91QjtFQ052QixnQkFBQTtBQUVGO0FBQ0E7RUFDRTtJQUNFLHNDQUFBO0VBRUY7QUFDRiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTU9CSUxFIFNJWklORyAqL1xyXG4vLyR4czogMzIwcHg7IC8vbW9iaWxlXHJcbi8vJHNtOiA0ODFweDsgLy90YWJsZXRzXHJcbi8vJG1kOiA3NjlweDsgLy9zbWFsbCBkZXZpY2VzXHJcbi8vJGxnOiAxMDI1cHg7IC8vbGFyZ2UgLyBQQ1xyXG4vLyR4bDogMTIwMXB4OyAgLy9leHRyYSBsYXJnZVxyXG5cclxuJHhzOiAzMjBweDsgLy9tb2JpbGVcclxuJHNtOiA2NDBweDsgLy90YWJsZXRzXHJcbiRtZDogNzIwcHg7IC8vc21hbGwgZGV2aWNlc1xyXG4kbGc6IDIwOW1tOyAvL2xhcmdlIC8gUENcclxuLy8keGw6IDEyMDFweDsgIC8vZXh0cmEgbGFyZ2VcclxuXHJcbi8qIFNJWklORyAqL1xyXG4kcGFnZS1oZWlnaHQ6IDI5N21tO1xyXG4kc3BhY2U6IDMycHg7XHJcbiRzcGFjZS1iZXR3ZWVuLWVsZW1lbnRzOiAxOHB4O1xyXG4kYm9yZGVyLXNpemU6IDVweDtcclxuJGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4kcGFyYWdyYXBoLW1hcmdpbjogMTJweDtcclxuJGxpbmUtc3BhY2U6IDhweDtcclxuXHJcbiRhdmF0YXItc2l6ZTogMTI1cHg7XHJcblxyXG4vL2ZvbnRcclxuJGZvbnQtc2l6ZTogMTBweDtcclxuJGZvbnQtc2l6ZS14czogMTJweDtcclxuXHJcbiR0ZXh0LWhlYWRlci1mb250LXNpemU6IDEuN3JlbTtcclxuJHRleHQtZm9udC1zaXplOiAxLjJyZW07XHJcbiR0ZXh0LWRhdGUtc2l6ZTogMS4xcmVtO1xyXG4kdXNlci1kZXRhaWxzLWZvbnQtc2l6ZTogM3JlbTtcclxuXHJcbi8qIENPTE9SUyAqL1xyXG5cclxuJHRoZW1lLWRhcms6ICMzNDM2Mzc7XHJcbiR0aGVtZS13aGl0ZTogI2ZmZjtcclxuJG1haW4tY29sb3I6ICNlNmU2ZTg7XHJcbiRjb2xvcjogIzM2MmQyZTtcclxuJGNvbG9yLWludmVydGVkOiAjZmZmO1xyXG5cclxuJGZvbnQtYWNjZW50LTE6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuJGZvbnQtYWNjZW50LTI6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbi5leHBlcmllbmNlX19kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogJHBhcmFncmFwaC1tYXJnaW47XHJcbn1cclxuXHJcbi5leHBlcmllbmNlX19jYXRlZ29yeS13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIGF1dG8pO1xyXG4gIGdhcDogJHNwYWNlLWJldHdlZW4tZWxlbWVudHM7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1kKSwgcHJpbnQge1xyXG4gIC5leHBlcmllbmNlX19jYXRlZ29yeS13cmFwcGVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xyXG4gIH1cclxufVxyXG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    4131:
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/home/components/sections/avatar-section/avatar-section.component.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AvatarSectionComponent": function AvatarSectionComponent() {
          return (
            /* binding */
            _AvatarSectionComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function AvatarSectionComponent_h1_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.name);
        }
      }

      function AvatarSectionComponent_h2_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.position);
        }
      }

      var _AvatarSectionComponent = function _AvatarSectionComponent() {
        _classCallCheck(this, _AvatarSectionComponent);

        this.id = 'user';
      };

      _AvatarSectionComponent.ɵfac = function AvatarSectionComponent_Factory(t) {
        return new (t || _AvatarSectionComponent)();
      };

      _AvatarSectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AvatarSectionComponent,
        selectors: [["app-avatar-section"]],
        inputs: {
          name: "name",
          position: "position",
          url: "url",
          id: "id"
        },
        decls: 4,
        vars: 3,
        consts: [["alt", "User", 1, "user__img", 3, "src"], [1, "user__data"], ["class", "user__name", 4, "ngIf"], ["class", "user__position", 4, "ngIf"], [1, "user__name"], [1, "user__position"]],
        template: function AvatarSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AvatarSectionComponent_h1_2_Template, 2, 1, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AvatarSectionComponent_h2_3_Template, 2, 1, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.position);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
        styles: [".user__img[_ngcontent-%COMP%] {\n  max-width: 61.63%;\n  max-height: 61.63%;\n  border-radius: 50%;\n  filter: saturate(0);\n  left: 50%;\n  position: relative;\n  transform: translateX(-50%);\n}\n.user__name[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  grid-area: name;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 0;\n}\n.user__position[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  grid-area: position;\n  font-weight: 400;\n  text-align: center;\n}\n@media screen and (min-width: 640px), print {\n  .user__img[_ngcontent-%COMP%] {\n    max-height: 125px;\n    max-width: 125px;\n  }\n\n  .user__data[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcYWJzdHJhY3RzXFxfdmFyaWFibGVzLnNjc3MiLCJhdmF0YXItc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBQTtBQWFBLFdBQUE7QUFvQkEsV0FBQTtBQy9CQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFFRjtBQUNBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUNBO0VBQ0U7SUFDRSxpQkRQVTtJQ1FWLGdCRFJVO0VDVVo7O0VBQ0E7SUFDRSxhQUFBO0VBRUY7QUFDRiIsImZpbGUiOiJhdmF0YXItc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1PQklMRSBTSVpJTkcgKi9cclxuLy8keHM6IDMyMHB4OyAvL21vYmlsZVxyXG4vLyRzbTogNDgxcHg7IC8vdGFibGV0c1xyXG4vLyRtZDogNzY5cHg7IC8vc21hbGwgZGV2aWNlc1xyXG4vLyRsZzogMTAyNXB4OyAvL2xhcmdlIC8gUENcclxuLy8keGw6IDEyMDFweDsgIC8vZXh0cmEgbGFyZ2VcclxuXHJcbiR4czogMzIwcHg7IC8vbW9iaWxlXHJcbiRzbTogNjQwcHg7IC8vdGFibGV0c1xyXG4kbWQ6IDcyMHB4OyAvL3NtYWxsIGRldmljZXNcclxuJGxnOiAyMDltbTsgLy9sYXJnZSAvIFBDXHJcbi8vJHhsOiAxMjAxcHg7ICAvL2V4dHJhIGxhcmdlXHJcblxyXG4vKiBTSVpJTkcgKi9cclxuJHBhZ2UtaGVpZ2h0OiAyOTdtbTtcclxuJHNwYWNlOiAzMnB4O1xyXG4kc3BhY2UtYmV0d2Vlbi1lbGVtZW50czogMThweDtcclxuJGJvcmRlci1zaXplOiA1cHg7XHJcbiRsaW5lLWhlaWdodDogMThweDtcclxuJHBhcmFncmFwaC1tYXJnaW46IDEycHg7XHJcbiRsaW5lLXNwYWNlOiA4cHg7XHJcblxyXG4kYXZhdGFyLXNpemU6IDEyNXB4O1xyXG5cclxuLy9mb250XHJcbiRmb250LXNpemU6IDEwcHg7XHJcbiRmb250LXNpemUteHM6IDEycHg7XHJcblxyXG4kdGV4dC1oZWFkZXItZm9udC1zaXplOiAxLjdyZW07XHJcbiR0ZXh0LWZvbnQtc2l6ZTogMS4ycmVtO1xyXG4kdGV4dC1kYXRlLXNpemU6IDEuMXJlbTtcclxuJHVzZXItZGV0YWlscy1mb250LXNpemU6IDNyZW07XHJcblxyXG4vKiBDT0xPUlMgKi9cclxuXHJcbiR0aGVtZS1kYXJrOiAjMzQzNjM3O1xyXG4kdGhlbWUtd2hpdGU6ICNmZmY7XHJcbiRtYWluLWNvbG9yOiAjZTZlNmU4O1xyXG4kY29sb3I6ICMzNjJkMmU7XHJcbiRjb2xvci1pbnZlcnRlZDogI2ZmZjtcclxuXHJcbiRmb250LWFjY2VudC0xOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiRmb250LWFjY2VudC0yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4udXNlcl9faW1nIHtcclxuICBtYXgtd2lkdGg6IDYxLjYzJTtcclxuICBtYXgtaGVpZ2h0OiA2MS42MyU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZpbHRlcjogc2F0dXJhdGUoMCk7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbi51c2VyX19uYW1lIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZ3JpZC1hcmVhOiBuYW1lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi51c2VyX19wb3NpdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgZ3JpZC1hcmVhOiBwb3NpdGlvbjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHNtKSwgcHJpbnQge1xyXG4gIC51c2VyX19pbWcge1xyXG4gICAgbWF4LWhlaWdodDogJGF2YXRhci1zaXplO1xyXG4gICAgbWF4LXdpZHRoOiAkYXZhdGFyLXNpemU7XHJcbiAgfVxyXG5cclxuICAudXNlcl9fZGF0YSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    7038:
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/home/components/sections/details-section/details-section.component.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DetailsSectionComponent": function DetailsSectionComponent() {
          return (
            /* binding */
            _DetailsSectionComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _c0 = ["*"];

      var _DetailsSectionComponent = function _DetailsSectionComponent() {
        _classCallCheck(this, _DetailsSectionComponent);
      };

      _DetailsSectionComponent.ɵfac = function DetailsSectionComponent_Factory(t) {
        return new (t || _DetailsSectionComponent)();
      };

      _DetailsSectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DetailsSectionComponent,
        selectors: [["app-personal-details"]],
        inputs: {
          title: "title"
        },
        ngContentSelectors: _c0,
        decls: 3,
        vars: 1,
        consts: [[1, "personal-details__header"]],
        template: function DetailsSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          }
        },
        styles: [".personal-details__header[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  background-color: #362d2e;\n  color: #fff;\n  position: relative;\n  width: 100%;\n  padding: 7px 32px;\n  text-transform: uppercase;\n  margin-bottom: 25px;\n  transform: translateX(-32px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcYWJzdHJhY3RzXFxfdmFyaWFibGVzLnNjc3MiLCJkZXRhaWxzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUE7QUFhQSxXQUFBO0FBb0JBLFdBQUE7QUMvQkE7RUFDRSxpQkR5QnNCO0VDeEJ0Qix5QkRrQ007RUNqQ04sV0RrQ2U7RUNqQ2Ysa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUFFRiIsImZpbGUiOiJkZXRhaWxzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNT0JJTEUgU0laSU5HICovXHJcbi8vJHhzOiAzMjBweDsgLy9tb2JpbGVcclxuLy8kc206IDQ4MXB4OyAvL3RhYmxldHNcclxuLy8kbWQ6IDc2OXB4OyAvL3NtYWxsIGRldmljZXNcclxuLy8kbGc6IDEwMjVweDsgLy9sYXJnZSAvIFBDXHJcbi8vJHhsOiAxMjAxcHg7ICAvL2V4dHJhIGxhcmdlXHJcblxyXG4keHM6IDMyMHB4OyAvL21vYmlsZVxyXG4kc206IDY0MHB4OyAvL3RhYmxldHNcclxuJG1kOiA3MjBweDsgLy9zbWFsbCBkZXZpY2VzXHJcbiRsZzogMjA5bW07IC8vbGFyZ2UgLyBQQ1xyXG4vLyR4bDogMTIwMXB4OyAgLy9leHRyYSBsYXJnZVxyXG5cclxuLyogU0laSU5HICovXHJcbiRwYWdlLWhlaWdodDogMjk3bW07XHJcbiRzcGFjZTogMzJweDtcclxuJHNwYWNlLWJldHdlZW4tZWxlbWVudHM6IDE4cHg7XHJcbiRib3JkZXItc2l6ZTogNXB4O1xyXG4kbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiRwYXJhZ3JhcGgtbWFyZ2luOiAxMnB4O1xyXG4kbGluZS1zcGFjZTogOHB4O1xyXG5cclxuJGF2YXRhci1zaXplOiAxMjVweDtcclxuXHJcbi8vZm9udFxyXG4kZm9udC1zaXplOiAxMHB4O1xyXG4kZm9udC1zaXplLXhzOiAxMnB4O1xyXG5cclxuJHRleHQtaGVhZGVyLWZvbnQtc2l6ZTogMS43cmVtO1xyXG4kdGV4dC1mb250LXNpemU6IDEuMnJlbTtcclxuJHRleHQtZGF0ZS1zaXplOiAxLjFyZW07XHJcbiR1c2VyLWRldGFpbHMtZm9udC1zaXplOiAzcmVtO1xyXG5cclxuLyogQ09MT1JTICovXHJcblxyXG4kdGhlbWUtZGFyazogIzM0MzYzNztcclxuJHRoZW1lLXdoaXRlOiAjZmZmO1xyXG4kbWFpbi1jb2xvcjogI2U2ZTZlODtcclxuJGNvbG9yOiAjMzYyZDJlO1xyXG4kY29sb3ItaW52ZXJ0ZWQ6ICNmZmY7XHJcblxyXG4kZm9udC1hY2NlbnQtMTogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4kZm9udC1hY2NlbnQtMjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuLnBlcnNvbmFsLWRldGFpbHNfX2hlYWRlciB7XHJcbiAgZm9udC1zaXplOiAkdGV4dC1oZWFkZXItZm9udC1zaXplO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICBjb2xvcjogJGNvbG9yLWludmVydGVkO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA3cHggJHNwYWNlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSRzcGFjZSk7XHJcbn1cclxuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    6884:
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/home/components/sections/information-section/information-section.component.ts ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InformationSectionComponent": function InformationSectionComponent() {
          return (
            /* binding */
            _InformationSectionComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ant-design/icons-angular */
      3935);
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngneat/transloco */
      2096);

      function InformationSectionComponent_h3_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
        }
      }

      function InformationSectionComponent_ul_1_li_1_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
        }

        if (rf & 2) {
          var element_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", element_r5.icon);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          $implicit: a0
        };
      };

      function InformationSectionComponent_ul_1_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", element_r5.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, element_r5));
        }
      }

      function InformationSectionComponent_ul_1_li_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 13);
        }

        if (rf & 2) {
          var element_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, element_r5));
        }
      }

      function InformationSectionComponent_ul_1_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InformationSectionComponent_ul_1_li_1_i_1_Template, 1, 1, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InformationSectionComponent_ul_1_li_1_a_2_Template, 2, 5, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InformationSectionComponent_ul_1_li_1_ng_container_3_Template, 1, 4, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r5 == null ? null : element_r5.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r5.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !element_r5.link);
        }
      }

      function InformationSectionComponent_ul_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InformationSectionComponent_ul_1_li_1_Template, 4, 3, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.list);
        }
      }

      function InformationSectionComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var test_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, test_r12.title), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, test_r12.level));
        }
      }

      var _c1 = ["*"];

      var _InformationSectionComponent = function _InformationSectionComponent() {
        _classCallCheck(this, _InformationSectionComponent);
      };

      _InformationSectionComponent.ɵfac = function InformationSectionComponent_Factory(t) {
        return new (t || _InformationSectionComponent)();
      };

      _InformationSectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _InformationSectionComponent,
        selectors: [["app-information-section"]],
        inputs: {
          title: "title",
          list: "list"
        },
        ngContentSelectors: _c1,
        decls: 6,
        vars: 2,
        consts: [["class", "text-header section__header", 4, "ngIf"], ["class", "section__list", 4, "ngIf"], [1, "section__content"], ["contentElement", ""], [1, "text-header", "section__header"], [1, "section__list"], ["class", "section__element", 4, "ngFor", "ngForOf"], [1, "section__element"], ["theme", "fill", "class", "section__icon", "antIcon", "", 3, "type", 4, "ngIf"], ["target", "_blank", "class", "section__link", 3, "href", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["theme", "fill", "antIcon", "", 1, "section__icon", 3, "type"], ["target", "_blank", 1, "section__link", 3, "href"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "section__level"]],
        template: function InformationSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InformationSectionComponent_h3_0_Template, 2, 1, "h3", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InformationSectionComponent_ul_1_Template, 2, 1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InformationSectionComponent_ng_template_4_Template, 5, 6, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_2__.IconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
        pipes: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoPipe],
        styles: [".section__header[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.section__element[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  border-bottom: 1.32px solid #362d2e;\n  padding: 3.5% 0;\n  position: relative;\n  color: #362d2e;\n}\n.section__element[_ngcontent-%COMP%], .section__content[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.section__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.section__icon[_ngcontent-%COMP%] {\n  font-weight: 400;\n  position: absolute;\n  left: 7%;\n  top: 50%;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcYWJzdHJhY3RzXFxfdmFyaWFibGVzLnNjc3MiLCJpbmZvcm1hdGlvbi1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FBYUEsV0FBQTtBQW9CQSxXQUFBO0FDL0JBO0VBQ0UsbUJEZ0JpQjtBQ2RuQjtBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRDBCTTtBQ3hCUjtBQUNBOztFQUVFLGdCQUFBO0FBRUY7QUFDQTtFQUNFLHFCQUFBO0FBRUY7QUFDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBRUYiLCJmaWxlIjoiaW5mb3JtYXRpb24tc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1PQklMRSBTSVpJTkcgKi9cclxuLy8keHM6IDMyMHB4OyAvL21vYmlsZVxyXG4vLyRzbTogNDgxcHg7IC8vdGFibGV0c1xyXG4vLyRtZDogNzY5cHg7IC8vc21hbGwgZGV2aWNlc1xyXG4vLyRsZzogMTAyNXB4OyAvL2xhcmdlIC8gUENcclxuLy8keGw6IDEyMDFweDsgIC8vZXh0cmEgbGFyZ2VcclxuXHJcbiR4czogMzIwcHg7IC8vbW9iaWxlXHJcbiRzbTogNjQwcHg7IC8vdGFibGV0c1xyXG4kbWQ6IDcyMHB4OyAvL3NtYWxsIGRldmljZXNcclxuJGxnOiAyMDltbTsgLy9sYXJnZSAvIFBDXHJcbi8vJHhsOiAxMjAxcHg7ICAvL2V4dHJhIGxhcmdlXHJcblxyXG4vKiBTSVpJTkcgKi9cclxuJHBhZ2UtaGVpZ2h0OiAyOTdtbTtcclxuJHNwYWNlOiAzMnB4O1xyXG4kc3BhY2UtYmV0d2Vlbi1lbGVtZW50czogMThweDtcclxuJGJvcmRlci1zaXplOiA1cHg7XHJcbiRsaW5lLWhlaWdodDogMThweDtcclxuJHBhcmFncmFwaC1tYXJnaW46IDEycHg7XHJcbiRsaW5lLXNwYWNlOiA4cHg7XHJcblxyXG4kYXZhdGFyLXNpemU6IDEyNXB4O1xyXG5cclxuLy9mb250XHJcbiRmb250LXNpemU6IDEwcHg7XHJcbiRmb250LXNpemUteHM6IDEycHg7XHJcblxyXG4kdGV4dC1oZWFkZXItZm9udC1zaXplOiAxLjdyZW07XHJcbiR0ZXh0LWZvbnQtc2l6ZTogMS4ycmVtO1xyXG4kdGV4dC1kYXRlLXNpemU6IDEuMXJlbTtcclxuJHVzZXItZGV0YWlscy1mb250LXNpemU6IDNyZW07XHJcblxyXG4vKiBDT0xPUlMgKi9cclxuXHJcbiR0aGVtZS1kYXJrOiAjMzQzNjM3O1xyXG4kdGhlbWUtd2hpdGU6ICNmZmY7XHJcbiRtYWluLWNvbG9yOiAjZTZlNmU4O1xyXG4kY29sb3I6ICMzNjJkMmU7XHJcbiRjb2xvci1pbnZlcnRlZDogI2ZmZjtcclxuXHJcbiRmb250LWFjY2VudC0xOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiRmb250LWFjY2VudC0yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4uc2VjdGlvbl9faGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAkcGFyYWdyYXBoLW1hcmdpbjtcclxufVxyXG5cclxuLnNlY3Rpb25fX2VsZW1lbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxLjMycHggc29saWQgJGNvbG9yO1xyXG4gIHBhZGRpbmc6IDMuNSUgMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxufVxyXG5cclxuLnNlY3Rpb25fX2VsZW1lbnQsXHJcbi5zZWN0aW9uX19jb250ZW50IHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc2VjdGlvbl9fbGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uc2VjdGlvbl9faWNvbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNyU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbiJdfQ== */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    1276:
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/home/components/sections/skill-section/skill-section.component.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SkillSectionComponent": function SkillSectionComponent() {
          return (
            /* binding */
            _SkillSectionComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function SkillSectionComponent_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4, " ");
        }
      }

      function SkillSectionComponent_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillSectionComponent_ul_3_li_1_Template, 2, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.skillLevel);
        }
      }

      function SkillSectionComponent_div_5_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.additionalSkills, " ");
        }
      }

      function SkillSectionComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkillSectionComponent_div_5_p_3_Template, 2, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.additionalSkillTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r1.additionalSkills);
        }
      }

      function SkillSectionComponent_div_6_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.programs, " ");
        }
      }

      function SkillSectionComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkillSectionComponent_div_6_p_3_Template, 2, 1, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.programsTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r2.programs);
        }
      }

      var _SkillSectionComponent = function _SkillSectionComponent() {
        _classCallCheck(this, _SkillSectionComponent);
      };

      _SkillSectionComponent.ɵfac = function SkillSectionComponent_Factory(t) {
        return new (t || _SkillSectionComponent)();
      };

      _SkillSectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _SkillSectionComponent,
        selectors: [["app-skill-section"]],
        inputs: {
          skillTitle: "skillTitle",
          additionalSkillTitle: "additionalSkillTitle",
          programsTitle: "programsTitle",
          skillLevel: "skillLevel",
          additionalSkills: "additionalSkills",
          programs: "programs"
        },
        decls: 7,
        vars: 4,
        consts: [[1, "skill-box"], [1, "text-header", "skill-box__title"], ["class", "section__list skill-box__list", 4, "ngIf"], [1, "skill-box__section"], [4, "ngIf"], [1, "section__list", "skill-box__list"], ["class", "skill-box__list-element", 4, "ngFor", "ngForOf"], [1, "skill-box__list-element"], [1, "text-header"], ["class", "skill-box__additional-skills", 4, "ngIf"], [1, "skill-box__additional-skills"]],
        template: function SkillSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkillSectionComponent_ul_3_Template, 2, 1, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SkillSectionComponent_div_5_Template, 4, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SkillSectionComponent_div_6_Template, 4, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.skillTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.skillLevel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.additionalSkillTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.programsTitle);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
        styles: [".skill-box[_ngcontent-%COMP%] {\n  border-bottom: 5px solid #362d2e;\n  border-left: 5px solid #362d2e;\n  border-right: 5px solid #362d2e;\n  position: relative;\n  margin-top: calc( 0.85rem - 2.5px );\n}\n.skill-box__title[_ngcontent-%COMP%] {\n  top: calc( -0.85rem - 2.5px );\n  margin-left: -5px;\n  margin-right: -5px;\n}\n.skill-box__list[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  padding: 0 25px;\n}\n.skill-box__additional-skills[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 10px 25px;\n  line-height: 18px;\n}\n.skill-box__list-element[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 1% 0;\n  text-transform: uppercase;\n}\n.skill-box__section[_ngcontent-%COMP%] {\n  background-color: #362d2e;\n  color: #fff;\n  width: calc(100% + 2px);\n  left: -1px;\n  bottom: -1px;\n  position: relative;\n}\n.skill-box__section[_ngcontent-%COMP%]   .text-header[_ngcontent-%COMP%] {\n  margin: -5px;\n  padding-top: 20px;\n  padding-bottom: 15px;\n}\n.skill-box__section[_ngcontent-%COMP%]   .text-header[_ngcontent-%COMP%]:before, .skill-box__section[_ngcontent-%COMP%]   .text-header[_ngcontent-%COMP%]:after {\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcYWJzdHJhY3RzXFxfdmFyaWFibGVzLnNjc3MiLCJza2lsbC1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FBYUEsV0FBQTtBQW9CQSxXQUFBO0FDcEJBO0VBR0UsZ0NBRlM7RUFHVCw4QkFIUztFQUlULCtCQUpTO0VBTVQsa0JBQUE7RUFDQSxtQ0FqQmlCO0FBS25CO0FBZUE7RUFDRSw2QkFsQm9CO0VBbUJwQixpQkFBQTtFQUNBLGtCQUFBO0FBWkY7QUFlQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQVpGO0FBZUE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkRwQlk7QUNRZDtBQWVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBWkY7QUFlQTtFQUNFLHlCRFhNO0VDWU4sV0RYZTtFQ1lmLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVpGO0FBY0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQVpKO0FBYUk7RUFFRSxzQkR2Qlc7QUNXakIiLCJmaWxlIjoic2tpbGwtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1PQklMRSBTSVpJTkcgKi9cclxuLy8keHM6IDMyMHB4OyAvL21vYmlsZVxyXG4vLyRzbTogNDgxcHg7IC8vdGFibGV0c1xyXG4vLyRtZDogNzY5cHg7IC8vc21hbGwgZGV2aWNlc1xyXG4vLyRsZzogMTAyNXB4OyAvL2xhcmdlIC8gUENcclxuLy8keGw6IDEyMDFweDsgIC8vZXh0cmEgbGFyZ2VcclxuXHJcbiR4czogMzIwcHg7IC8vbW9iaWxlXHJcbiRzbTogNjQwcHg7IC8vdGFibGV0c1xyXG4kbWQ6IDcyMHB4OyAvL3NtYWxsIGRldmljZXNcclxuJGxnOiAyMDltbTsgLy9sYXJnZSAvIFBDXHJcbi8vJHhsOiAxMjAxcHg7ICAvL2V4dHJhIGxhcmdlXHJcblxyXG4vKiBTSVpJTkcgKi9cclxuJHBhZ2UtaGVpZ2h0OiAyOTdtbTtcclxuJHNwYWNlOiAzMnB4O1xyXG4kc3BhY2UtYmV0d2Vlbi1lbGVtZW50czogMThweDtcclxuJGJvcmRlci1zaXplOiA1cHg7XHJcbiRsaW5lLWhlaWdodDogMThweDtcclxuJHBhcmFncmFwaC1tYXJnaW46IDEycHg7XHJcbiRsaW5lLXNwYWNlOiA4cHg7XHJcblxyXG4kYXZhdGFyLXNpemU6IDEyNXB4O1xyXG5cclxuLy9mb250XHJcbiRmb250LXNpemU6IDEwcHg7XHJcbiRmb250LXNpemUteHM6IDEycHg7XHJcblxyXG4kdGV4dC1oZWFkZXItZm9udC1zaXplOiAxLjdyZW07XHJcbiR0ZXh0LWZvbnQtc2l6ZTogMS4ycmVtO1xyXG4kdGV4dC1kYXRlLXNpemU6IDEuMXJlbTtcclxuJHVzZXItZGV0YWlscy1mb250LXNpemU6IDNyZW07XHJcblxyXG4vKiBDT0xPUlMgKi9cclxuXHJcbiR0aGVtZS1kYXJrOiAjMzQzNjM3O1xyXG4kdGhlbWUtd2hpdGU6ICNmZmY7XHJcbiRtYWluLWNvbG9yOiAjZTZlNmU4O1xyXG4kY29sb3I6ICMzNjJkMmU7XHJcbiRjb2xvci1pbnZlcnRlZDogI2ZmZjtcclxuXHJcbiRmb250LWFjY2VudC0xOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiRmb250LWFjY2VudC0yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4kaGVhZGVyLXZlcnRpY2FsLWNlbnRlcjogJHRleHQtaGVhZGVyLWZvbnQtc2l6ZSAvIDI7XHJcbiRib3JkZXItdmVydGljYWwtY2VudGVyOiAkYm9yZGVyLXNpemUgLyAyO1xyXG4kYm94LXBvc2l0aW9uLWZpeDogY2FsYyhcclxuICAjeyRoZWFkZXItdmVydGljYWwtY2VudGVyfSAtICN7JGJvcmRlci12ZXJ0aWNhbC1jZW50ZXJ9XHJcbik7XHJcbiRoZWFkZXItcG9zaXRpb24tZml4OiBjYWxjKFxyXG4gICN7LSRoZWFkZXItdmVydGljYWwtY2VudGVyfSAtICN7JGJvcmRlci12ZXJ0aWNhbC1jZW50ZXJ9XHJcbik7XHJcbiRib3gtaW5zaWRlLXBhZGRpbmc6IGNhbGMoMTAwJSAtIDI1cHggKiAyKTtcclxuJHdpZHRoLXBhZGRpbmc6IDI1cHg7XHJcblxyXG4uc2tpbGwtYm94IHtcclxuICAkYm9yZGVyOiAkYm9yZGVyLXNpemUgc29saWQgJGNvbG9yO1xyXG5cclxuICBib3JkZXItYm90dG9tOiAkYm9yZGVyO1xyXG4gIGJvcmRlci1sZWZ0OiAkYm9yZGVyO1xyXG4gIGJvcmRlci1yaWdodDogJGJvcmRlcjtcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6ICRib3gtcG9zaXRpb24tZml4O1xyXG59XHJcblxyXG4uc2tpbGwtYm94X190aXRsZSB7XHJcbiAgdG9wOiAkaGVhZGVyLXBvc2l0aW9uLWZpeDtcclxuICBtYXJnaW4tbGVmdDogLSRib3JkZXItc2l6ZTtcclxuICBtYXJnaW4tcmlnaHQ6IC0kYm9yZGVyLXNpemU7XHJcbn1cclxuXHJcbi5za2lsbC1ib3hfX2xpc3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgcGFkZGluZzogMCAkd2lkdGgtcGFkZGluZztcclxufVxyXG5cclxuLnNraWxsLWJveF9fYWRkaXRpb25hbC1za2lsbHMge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxMHB4ICR3aWR0aC1wYWRkaW5nO1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbn1cclxuXHJcbi5za2lsbC1ib3hfX2xpc3QtZWxlbWVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxJSAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5za2lsbC1ib3hfX3NlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcclxuICBjb2xvcjogJGNvbG9yLWludmVydGVkO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAycHgpO1xyXG4gIGxlZnQ6IC0xcHg7XHJcbiAgYm90dG9tOiAtMXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLnRleHQtaGVhZGVyIHtcclxuICAgIG1hcmdpbjogMCAtJGJvcmRlci1zaXplO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICY6YmVmb3JlLFxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1pbnZlcnRlZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    4882:
    /*!*********************************************!*\
      !*** ./src/app/modules/home/home.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeModule": function HomeModule() {
          return (
            /* binding */
            _HomeModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngneat/transloco */
      2096);
      /* harmony import */


      var _core_pipe_join_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/pipe/join.pipe */
      4978);
      /* harmony import */


      var _components_sections_skill_section_skill_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/sections/skill-section/skill-section.component */
      1276);
      /* harmony import */


      var _components_sections_avatar_section_avatar_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/sections/avatar-section/avatar-section.component */
      4131);
      /* harmony import */


      var _components_sections_information_section_information_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/sections/information-section/information-section.component */
      6884);
      /* harmony import */


      var _components_sections_details_section_details_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/sections/details-section/details-section.component */
      7038);
      /* harmony import */


      var _components_category_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/category/category.component */
      8646);
      /* harmony import */


      var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/experience/experience.component */
      9100);
      /* harmony import */


      var _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ant-design/icons-angular */
      3935);
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/home/home.component */
      8710);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        redirectTo: '/en',
        pathMatch: 'full'
      }, {
        path: ':lang',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__.HomeComponent
      }];

      var _HomeModule = function _HomeModule() {
        _classCallCheck(this, _HomeModule);
      };

      _HomeModule.ɵfac = function HomeModule_Factory(t) {
        return new (t || _HomeModule)();
      };

      _HomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _HomeModule
      });
      _HomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _ngneat_transloco__WEBPACK_IMPORTED_MODULE_11__.TranslocoModule, _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_12__.IconModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_HomeModule, {
          declarations: [_components_sections_skill_section_skill_section_component__WEBPACK_IMPORTED_MODULE_1__.SkillSectionComponent, _components_sections_avatar_section_avatar_section_component__WEBPACK_IMPORTED_MODULE_2__.AvatarSectionComponent, _components_sections_information_section_information_section_component__WEBPACK_IMPORTED_MODULE_3__.InformationSectionComponent, _components_sections_details_section_details_section_component__WEBPACK_IMPORTED_MODULE_4__.DetailsSectionComponent, _components_category_category_component__WEBPACK_IMPORTED_MODULE_5__.CategoryComponent, _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__.ExperienceComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__.HomeComponent, _core_pipe_join_pipe__WEBPACK_IMPORTED_MODULE_0__.JoinPipe],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _ngneat_transloco__WEBPACK_IMPORTED_MODULE_11__.TranslocoModule, _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_12__.IconModule]
        });
      })();
      /***/

    },

    /***/
    4433:
    /*!********************************************************************!*\
      !*** ./src/app/modules/home/models/enums/experience-title.enum.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExperienceTitle": function ExperienceTitle() {
          return (
            /* binding */
            _ExperienceTitle
          );
        }
        /* harmony export */

      });

      var _ExperienceTitle;

      (function (ExperienceTitle) {
        ExperienceTitle[ExperienceTitle["experience"] = 0] = "experience";
        ExperienceTitle[ExperienceTitle["category"] = 1] = "category";
      })(_ExperienceTitle || (_ExperienceTitle = {}));
      /***/

    },

    /***/
    8710:
    /*!***********************************************************!*\
      !*** ./src/app/modules/home/pages/home/home.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_enums_experience_title_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../models/enums/experience-title.enum */
      4433);
      /* harmony import */


      var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ant-design/icons-angular/icons */
      6390);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      8002);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngneat/transloco */
      2096);
      /* harmony import */


      var _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ant-design/icons-angular */
      3935);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _components_sections_avatar_section_avatar_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../components/sections/avatar-section/avatar-section.component */
      4131);
      /* harmony import */


      var _components_sections_information_section_information_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/sections/information-section/information-section.component */
      6884);
      /* harmony import */


      var _components_sections_skill_section_skill_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/sections/skill-section/skill-section.component */
      1276);
      /* harmony import */


      var _components_sections_details_section_details_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/sections/details-section/details-section.component */
      7038);
      /* harmony import */


      var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/experience/experience.component */
      9100);
      /* harmony import */


      var _components_category_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/category/category.component */
      8646);
      /* harmony import */


      var _core_pipe_join_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../core/pipe/join.pipe */
      4978);

      function HomeComponent_ng_container_1_app_experience_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-experience", 25);
        }

        if (rf & 2) {
          var work_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", work_r4.title)("date", work_r4.date)("position", work_r4.position)("description", work_r4.description)("subcategory", work_r4.subcategory);
        }
      }

      function HomeComponent_ng_container_1_app_category_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-category", 26);
        }

        if (rf & 2) {
          var project_r5 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", project_r5.title)("link", project_r5.link)("git", project_r5.git)("type", ctx_r3.categoryType);
        }
      }

      function HomeComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "aside");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-avatar-section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-information-section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "app-information-section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "app-information-section", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "join");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "app-skill-section", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](24, "join");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "join");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "section", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "h1", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "h2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](36, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "section", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "app-personal-details", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](39, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](42, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "section", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "app-personal-details", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](45, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, HomeComponent_ng_container_1_app_experience_46_Template, 1, 5, "app-experience", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "section", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "app-personal-details", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](49, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, HomeComponent_ng_container_1_app_category_52_Template, 1, 4, "app-category", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](55, "transloco");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var data_r1 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 23, "user.name"))("position", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 25, "user.position"));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 27, "contact.title"))("list", data_r1.contact);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 29, "languages.title"))("list", data_r1.languages);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 31, "hobbies.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](18, 33, data_r1.hobbies, ", "));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("skillTitle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 36, "skills.title"))("skillLevel", data_r1.skills)("additionalSkillTitle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 38, "additionalSkills.title"))("additionalSkills", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 40, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](24, 42, data_r1.additionalSkills, ", ")))("programsTitle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](25, 45, "programs.title"))("programs", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](26, 47, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](27, 49, data_r1.programs, ", ")));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 52, "user.name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](36, 54, "user.position"));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](39, 56, "objective.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](42, 58, "objective.description"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](45, 60, "experience.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", data_r1.experience);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](49, 62, "projects.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", data_r1.projects);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](55, 64, "clause"), " ");
        }
      }

      var _HomeComponent = /*#__PURE__*/function () {
        function _HomeComponent(_route, _translate, _iconService) {
          _classCallCheck(this, _HomeComponent);

          this._route = _route;
          this._translate = _translate;
          this._iconService = _iconService;
          this.data$ = this._translate.selectTranslate(['contact.data', 'languages.data', 'hobbies.data', 'skills.data', 'additionalSkills.data', 'programs.data', 'experience.data', 'projects.data']).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 8),
                contact = _ref2[0],
                languages = _ref2[1],
                hobbies = _ref2[2],
                skills = _ref2[3],
                additionalSkills = _ref2[4],
                programs = _ref2[5],
                experience = _ref2[6],
                projects = _ref2[7];

            return {
              contact: contact,
              languages: languages,
              hobbies: hobbies,
              skills: skills,
              additionalSkills: additionalSkills,
              programs: programs,
              experience: experience,
              projects: projects
            };
          }));
          this.categoryType = _models_enums_experience_title_enum__WEBPACK_IMPORTED_MODULE_0__.ExperienceTitle.category;
          this.icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_10__.PhoneFill, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_10__.MailFill, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_10__.LinkedinFill, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_10__.GithubFill, _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_10__.CaretUpFill];
        }

        _createClass(_HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addIcons();
            this.setTranslation();
          }
        }, {
          key: "addIcons",
          value: function addIcons() {
            var _this$_iconService;

            (_this$_iconService = this._iconService).addIcon.apply(_this$_iconService, _toConsumableArray(this.icons));
          }
        }, {
          key: "setTranslation",
          value: function setTranslation() {
            var lang = this._route.snapshot.paramMap.get('lang');

            this._translate.setActiveLang("".concat(lang));
          }
        }]);

        return _HomeComponent;
      }();

      _HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || _HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_12__.TranslocoService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_13__.IconService));
      };

      _HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: _HomeComponent,
        selectors: [["app-home"]],
        decls: 3,
        vars: 3,
        consts: [[1, "page"], [4, "ngIf"], ["id", "user", 1, "user"], ["url", "./assets/img/user.jpg", 3, "name", "position"], [1, "information-section"], ["id", "contact"], [3, "title", "list"], ["id", "languages"], [1, "text-uppercase", 3, "title", "list"], ["id", "hobbies"], [3, "title"], ["id", "skill"], [3, "skillTitle", "skillLevel", "additionalSkillTitle", "additionalSkills", "programsTitle", "programs"], ["id", "user-name", 1, "user-box"], [1, "user-box__wrapper"], [1, "user-box__name"], [1, "user-box__position"], ["id", "objective"], [1, "text-paragraph"], ["id", "experience"], [3, "title", "date", "position", "description", "subcategory", 4, "ngFor", "ngForOf"], ["id", "projects"], [1, "page--projects"], [3, "title", "link", "git", "type", 4, "ngFor", "ngForOf"], [1, "clause"], [3, "title", "date", "position", "description", "subcategory"], [3, "title", "link", "git", "type"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, HomeComponent_ng_container_1_Template, 56, 66, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx.data$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _components_sections_avatar_section_avatar_section_component__WEBPACK_IMPORTED_MODULE_1__.AvatarSectionComponent, _components_sections_information_section_information_section_component__WEBPACK_IMPORTED_MODULE_2__.InformationSectionComponent, _components_sections_skill_section_skill_section_component__WEBPACK_IMPORTED_MODULE_3__.SkillSectionComponent, _components_sections_details_section_details_section_component__WEBPACK_IMPORTED_MODULE_4__.DetailsSectionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__.ExperienceComponent, _components_category_category_component__WEBPACK_IMPORTED_MODULE_6__.CategoryComponent],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _ngneat_transloco__WEBPACK_IMPORTED_MODULE_12__.TranslocoPipe, _core_pipe_join_pipe__WEBPACK_IMPORTED_MODULE_7__.JoinPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.UpperCasePipe],
        styles: ["aside[_ngcontent-%COMP%], main[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.page[_ngcontent-%COMP%] {\n  background-color: white;\n}\naside[_ngcontent-%COMP%] {\n  grid-area: aside;\n  font-size: 1.2rem;\n  display: flex;\n  flex-direction: column;\n}\n.information-section[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\nmain[_ngcontent-%COMP%] {\n  grid-area: main;\n  background-color: #e6e6e8;\n  margin-bottom: 32px;\n  font-size: 1.2rem;\n  position: relative;\n}\n.user-box[_ngcontent-%COMP%] {\n  display: none;\n}\n.page--projects[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-gap: 18px;\n  gap: 18px;\n  margin-top: 12px;\n}\n@media screen and (min-width: 640px), print {\n  .page[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-areas: \"aside main\";\n    grid-template-columns: 300px auto;\n    margin-top: 42px;\n  }\n\n  .user-box[_ngcontent-%COMP%] {\n    display: block;\n    position: relative;\n    text-transform: uppercase;\n    height: 100px;\n  }\n  .user-box[_ngcontent-%COMP%]:after {\n    content: \"\";\n    height: 35px;\n    width: 35px;\n    background-color: #e6e6e8;\n    position: absolute;\n    left: -49.5px;\n    top: 50%;\n    transform: translateY(-50%) rotate(45deg);\n  }\n\n  .user-box__wrapper[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  .user-box__name[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    margin: 0 0 15px;\n  }\n\n  .user-box__position[_ngcontent-%COMP%] {\n    font-weight: 400;\n    margin: 0;\n  }\n\n  .page--projects[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\napp-experience[_ngcontent-%COMP%]:not(:last-of-type) {\n  display: block;\n  margin-bottom: 18px;\n}\n@media screen and (min-width: 720px), print {\n  .page[_ngcontent-%COMP%] {\n    transition: 0.4s;\n  }\n}\n@media screen and (min-width: 209mm), print {\n  .page[_ngcontent-%COMP%] {\n    width: 210mm;\n    height: 297mm;\n    overflow: hidden;\n    margin: 92px auto;\n  }\n\n  .clause[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 12px;\n    padding-right: 32px;\n  }\n}\n@media print {\n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], .page[_ngcontent-%COMP%] {\n    height: 297mm;\n  }\n\n  .page[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxhYnN0cmFjdHNcXF92YXJpYWJsZXMuc2NzcyIsImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUE7QUFhQSxXQUFBO0FBb0JBLFdBQUE7QUMvQkE7O0VBRUUsYURXTTtBQ1RSO0FBQ0E7RUFDRSx1QkFBQTtBQUVGO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGlCRGdCZTtFQ2ZmLGFBQUE7RUFDQSxzQkFBQTtBQUVGO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFFRjtBQUNBO0VBQ0UsZUFBQTtFQUNBLHlCRFVXO0VDVFgsbUJEYk07RUNjTixpQkFBQTtFQUNBLGtCQUFBO0FBRUY7QUFDQTtFQUNFLGFBQUE7QUFFRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsY0R4QnVCO0VDd0J2QixTRHhCdUI7RUN5QnZCLGdCQUFBO0FBRUY7QUFDQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGlDQUFBO0lBQ0EsaUNBQUE7SUFDQSxnQkFBQTtFQUVGOztFQUNBO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EseUJBQUE7SUFDQSxhQUFBO0VBRUY7RUFBRTtJQUVFLFdBQUE7SUFDQSxZQUZPO0lBR1AsV0FITztJQUlQLHlCRDFCTztJQzJCUCxrQkFBQTtJQUNBLGFBQUE7SUFDQSxRQUFBO0lBQ0EseUNBQUE7RUFDSjs7RUFHQTtJQUNFLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0VBQUY7O0VBR0E7SUFDRSxlRC9DcUI7SUNnRHJCLGdCQUFBO0VBQUY7O0VBR0E7SUFDRSxnQkFBQTtJQUNBLFNBQUE7RUFBRjs7RUFHQTtJQUNFLHFDQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0UsY0FBQTtFQUNBLG1CRDlFdUI7QUM2RXpCO0FBSUE7RUFDRTtJQUNFLGdCQUFBO0VBREY7QUFDRjtBQUlBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsYUQ1RlU7SUM2RlYsZ0JBQUE7SUFDQSxpQkFBQTtFQUZGOztFQUlBO0lBQ0Usa0JBQUE7SUFDQSxZRDdGZTtJQzhGZixtQkRsR0k7RUNpR047QUFDRjtBQUlBO0VBQ0U7OztJQUdFLGFEM0dVO0VDeUdaOztFQUlBO0lBQ0UsU0FBQTtFQURGO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1PQklMRSBTSVpJTkcgKi9cclxuLy8keHM6IDMyMHB4OyAvL21vYmlsZVxyXG4vLyRzbTogNDgxcHg7IC8vdGFibGV0c1xyXG4vLyRtZDogNzY5cHg7IC8vc21hbGwgZGV2aWNlc1xyXG4vLyRsZzogMTAyNXB4OyAvL2xhcmdlIC8gUENcclxuLy8keGw6IDEyMDFweDsgIC8vZXh0cmEgbGFyZ2VcclxuXHJcbiR4czogMzIwcHg7IC8vbW9iaWxlXHJcbiRzbTogNjQwcHg7IC8vdGFibGV0c1xyXG4kbWQ6IDcyMHB4OyAvL3NtYWxsIGRldmljZXNcclxuJGxnOiAyMDltbTsgLy9sYXJnZSAvIFBDXHJcbi8vJHhsOiAxMjAxcHg7ICAvL2V4dHJhIGxhcmdlXHJcblxyXG4vKiBTSVpJTkcgKi9cclxuJHBhZ2UtaGVpZ2h0OiAyOTdtbTtcclxuJHNwYWNlOiAzMnB4O1xyXG4kc3BhY2UtYmV0d2Vlbi1lbGVtZW50czogMThweDtcclxuJGJvcmRlci1zaXplOiA1cHg7XHJcbiRsaW5lLWhlaWdodDogMThweDtcclxuJHBhcmFncmFwaC1tYXJnaW46IDEycHg7XHJcbiRsaW5lLXNwYWNlOiA4cHg7XHJcblxyXG4kYXZhdGFyLXNpemU6IDEyNXB4O1xyXG5cclxuLy9mb250XHJcbiRmb250LXNpemU6IDEwcHg7XHJcbiRmb250LXNpemUteHM6IDEycHg7XHJcblxyXG4kdGV4dC1oZWFkZXItZm9udC1zaXplOiAxLjdyZW07XHJcbiR0ZXh0LWZvbnQtc2l6ZTogMS4ycmVtO1xyXG4kdGV4dC1kYXRlLXNpemU6IDEuMXJlbTtcclxuJHVzZXItZGV0YWlscy1mb250LXNpemU6IDNyZW07XHJcblxyXG4vKiBDT0xPUlMgKi9cclxuXHJcbiR0aGVtZS1kYXJrOiAjMzQzNjM3O1xyXG4kdGhlbWUtd2hpdGU6ICNmZmY7XHJcbiRtYWluLWNvbG9yOiAjZTZlNmU4O1xyXG4kY29sb3I6ICMzNjJkMmU7XHJcbiRjb2xvci1pbnZlcnRlZDogI2ZmZjtcclxuXHJcbiRmb250LWFjY2VudC0xOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiRmb250LWFjY2VudC0yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG5hc2lkZSxcclxubWFpbiB7XHJcbiAgcGFkZGluZzogJHNwYWNlO1xyXG59XHJcblxyXG4ucGFnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmFzaWRlIHtcclxuICBncmlkLWFyZWE6IGFzaWRlO1xyXG4gIGZvbnQtc2l6ZTogJHRleHQtZm9udC1zaXplO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmluZm9ybWF0aW9uLXNlY3Rpb24ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBncmlkLWFyZWE6IG1haW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XHJcbiAgbWFyZ2luLWJvdHRvbTogJHNwYWNlO1xyXG4gIGZvbnQtc2l6ZTogJHRleHQtZm9udC1zaXplO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVzZXItYm94IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucGFnZS0tcHJvamVjdHMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcclxuICBnYXA6ICRzcGFjZS1iZXR3ZWVuLWVsZW1lbnRzO1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRzbSksIHByaW50IHtcclxuICAucGFnZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2FzaWRlIG1haW4nO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNDJweDtcclxuICB9XHJcblxyXG4gIC51c2VyLWJveCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAkc2l6ZTogMzVweDtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGhlaWdodDogJHNpemU7XHJcbiAgICAgIHdpZHRoOiAkc2l6ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogLTQ5LjVweDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnVzZXItYm94X193cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuXHJcbiAgLnVzZXItYm94X19uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogJHVzZXItZGV0YWlscy1mb250LXNpemU7XHJcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnVzZXItYm94X19wb3NpdGlvbiB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLnBhZ2UtLXByb2plY3RzIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgfVxyXG59XHJcblxyXG5hcHAtZXhwZXJpZW5jZTpub3QoOmxhc3Qtb2YtdHlwZSkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206ICRzcGFjZS1iZXR3ZWVuLWVsZW1lbnRzO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWQpLCBwcmludCB7XHJcbiAgLnBhZ2Uge1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRsZyksIHByaW50IHtcclxuICAucGFnZSB7XHJcbiAgICB3aWR0aDogMjEwbW07XHJcbiAgICBoZWlnaHQ6ICRwYWdlLWhlaWdodDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDUwcHgrNDJweCBhdXRvO1xyXG4gIH1cclxuICAuY2xhdXNlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogJHBhcmFncmFwaC1tYXJnaW47XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAkc3BhY2U7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIGh0bWwsXHJcbiAgYm9keSxcclxuICAucGFnZSB7XHJcbiAgICBoZWlnaHQ6ICRwYWdlLWhlaWdodDtcclxuICB9XHJcbiAgLnBhZ2Uge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_modules_home_home_module_ts-es5.js.map