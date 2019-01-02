"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValidateOptions = getValidateOptions;
exports.getDefaultOptions = getDefaultOptions;
exports.getDefaultVars = getDefaultVars;
exports.extractFromSource = extractFromSource;

function getValidateOptions() {
  return {
    "type": "object",
    "properties": {
      "framework": {
        "type": ["string"]
      },
      "port": {
        "type": ["integer"]
      },
      "emit": {
        "type": ["boolean"]
      },
      "browser": {
        "type": ["boolean"]
      },
      "watch": {
        "type": ["string"]
      },
      "profile": {
        "type": ["string"]
      },
      "environment": {
        "type": ["string"]
      },
      "verbose": {
        "type": ["string"]
      },
      "theme": {
        "type": ["string"]
      },
      "toolkit": {
        "type": ["string"]
      },
      "packages": {
        "type": ["string", "array"]
      }
    },
    "additionalProperties": false // "errorMessage": {
    //   "option": "should be {Boolean} (https:/github.com/org/repo#anchor)"
    // }

  };
}

function getDefaultOptions() {
  return {
    port: 1962,
    emit: true,
    browser: true,
    watch: 'yes',
    profile: '',
    environment: 'development',
    verbose: 'no',
    toolkit: 'modern',
    packages: null
  };
}

function getDefaultVars() {
  return {
    watchStarted: false,
    firstTime: true,
    firstCompile: true,
    browserCount: 0,
    manifest: null,
    extPath: 'ext-angular',
    pluginErrors: [],
    deps: [],
    rebuild: true
  };
}

function toXtype(str) {
  return str.toLowerCase().replace(/_/g, '-');
}

function extractFromSource(module, options, compilation) {
  try {
    var js = module._source._value;

    const logv = require('./pluginUtil').logv;

    logv(options, 'FUNCTION extractFromSource');
    var statements = [];

    var generate = require("@babel/generator").default;

    var parse = require("babylon").parse;

    var traverse = require("ast-traverse");

    var ast = parse(js, {
      plugins: ['typescript', 'flow', 'doExpressions', 'objectRestSpread', 'classProperties', 'exportDefaultFrom', 'exportExtensions', 'asyncGenerators', 'functionBind', 'functionSent', 'dynamicImport'],
      sourceType: 'module'
    });

    function addType(argNode) {
      var type;

      if (argNode.type === 'StringLiteral') {
        var xtype = toXtype(argNode.value);

        if (xtype != 'extreact') {
          type = {
            xtype: toXtype(argNode.value)
          };
        }
      } else {
        type = {
          xclass: js.slice(argNode.start, argNode.end)
        };
      }

      if (type != undefined) {
        let config = JSON.stringify(type);
        statements.push(`Ext.create(${config})`);
      }
    }

    traverse(ast, {
      pre: function (node) {
        if (node.type === 'CallExpression' && node.callee && node.callee.object && node.callee.object.name === 'Ext') {
          statements.push(generate(node).code);
        }

        if (node.type === 'StringLiteral') {
          let code = node.value;

          for (var i = 0; i < code.length; ++i) {
            if (code.charAt(i) == '<') {
              if (code.substr(i, 4) == '<!--') {
                i += 4;
                i += code.substr(i).indexOf('-->') + 3;
              } else if (code.charAt(i + 1) !== '/') {
                var start = code.substring(i);
                var spaceEnd = start.indexOf(' ');
                var newlineEnd = start.indexOf('\n');
                var tagEnd = start.indexOf('>');
                var end = Math.min(spaceEnd, newlineEnd, tagEnd);

                if (end >= 0) {
                  var xtype = start.substring(1, end); // TODO add condition to check for ext componenets only.
                  // Donot need toXtype here since it can safely be assumend the selector is same as xtype for all components defined.

                  var type = {
                    xtype: toXtype(xtype)
                  };
                  let config = JSON.stringify(type);
                  statements.push(`Ext.create(${config})`);
                }
              }
            }
          }
        }

        if (node.type == 'VariableDeclarator' && node.init && node.init.type == 'CallExpression' && node.init.callee) {
          if (node.init.callee.name == 'reactify') {
            for (let i = 0; i < node.init.arguments.length; i++) {
              const valueNode = node.init.arguments[i];
              if (!valueNode) continue;
              addType(valueNode);
            }
          }
        } // Probably not required

      }
    });
    return statements;
  } catch (e) {
    console.log(e);
    compilation.errors.push('extractFromSource: ' + e);
    return [];
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hbmd1bGFyVXRpbC5qcyJdLCJuYW1lcyI6WyJnZXRWYWxpZGF0ZU9wdGlvbnMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInBvcnQiLCJlbWl0IiwiYnJvd3NlciIsIndhdGNoIiwicHJvZmlsZSIsImVudmlyb25tZW50IiwidmVyYm9zZSIsInRvb2xraXQiLCJwYWNrYWdlcyIsImdldERlZmF1bHRWYXJzIiwid2F0Y2hTdGFydGVkIiwiZmlyc3RUaW1lIiwiZmlyc3RDb21waWxlIiwiYnJvd3NlckNvdW50IiwibWFuaWZlc3QiLCJleHRQYXRoIiwicGx1Z2luRXJyb3JzIiwiZGVwcyIsInJlYnVpbGQiLCJ0b1h0eXBlIiwic3RyIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiZXh0cmFjdEZyb21Tb3VyY2UiLCJtb2R1bGUiLCJvcHRpb25zIiwiY29tcGlsYXRpb24iLCJqcyIsIl9zb3VyY2UiLCJfdmFsdWUiLCJsb2d2IiwicmVxdWlyZSIsInN0YXRlbWVudHMiLCJnZW5lcmF0ZSIsImRlZmF1bHQiLCJwYXJzZSIsInRyYXZlcnNlIiwiYXN0IiwicGx1Z2lucyIsInNvdXJjZVR5cGUiLCJhZGRUeXBlIiwiYXJnTm9kZSIsInR5cGUiLCJ4dHlwZSIsInZhbHVlIiwieGNsYXNzIiwic2xpY2UiLCJzdGFydCIsImVuZCIsInVuZGVmaW5lZCIsImNvbmZpZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwicHJlIiwibm9kZSIsImNhbGxlZSIsIm9iamVjdCIsIm5hbWUiLCJjb2RlIiwiaSIsImxlbmd0aCIsImNoYXJBdCIsInN1YnN0ciIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJzcGFjZUVuZCIsIm5ld2xpbmVFbmQiLCJ0YWdFbmQiLCJNYXRoIiwibWluIiwiaW5pdCIsImFyZ3VtZW50cyIsInZhbHVlTm9kZSIsImUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVPLFNBQVNBLGtCQUFULEdB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T0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQWhELElBQUFBLFdBQVcsQ0FBQ21ELE1BQVosQ0FBbUJ4QixJQUFuQixDQUF3Qix3QkFBd0JxQixDQUFoRDtBQUNBLFdBQU8sRUFBUDtBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsaWRhdGVPcHRpb25zKCkge1xuICByZXR1cm4ge1xuICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICBcImZyYW1ld29ya1wiOiAgIHtcInR5cGVcIjogWyBcInN0cmluZ1wiIF19LFxuICAgICAgXCJwb3J0XCI6ICAgICAgICB7XCJ0eXBlXCI6IFsgXCJpbnRlZ2VyXCIgXX0sXG4gICAgICBcImVtaXRcIjogICAgICAgIHtcInR5cGVcIjogWyBcImJvb2xlYW5cIiBdfSxcbiAgICAgIFwiYnJvd3NlclwiOiAgICAge1widHlwZVwiOiBbIFwiYm9vbGVhblwiIF19LFxuICAgICAgXCJ3YXRjaFwiOiAgICAgICB7XCJ0eXBlXCI6IFsgXCJzdHJpbmdcIiBdfSxcbiAgICAgIFwicHJvZmlsZVwiOiAgICAge1widHlwZVwiOiBbIFwic3RyaW5nXCIgXX0sXG4gICAgICBcImVudmlyb25tZW50XCI6IHtcInR5cGVcIjogWyBcInN0cmluZ1wiIF19LFxuICAgICAgXCJ2ZXJib3NlXCI6ICAgICB7XCJ0eXBlXCI6IFsgXCJzdHJpbmdcIiBdfSxcbiAgICAgIFwidGhlbWVcIjogICAgICAge1widHlwZVwiOiBbIFwic3RyaW5nXCIgXX0sXG4gICAgICBcInRvb2xraXRcIjogICAgIHtcInR5cGVcIjogWyBcInN0cmluZ1wiIF19LFxuICAgICAgXCJwYWNrYWdlc1wiOiAgICB7XCJ0eXBlXCI6IFsgXCJzdHJpbmdcIiwgXCJhcnJheVwiIF19XG4gICAgfSxcbiAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlXG4gICAgLy8gXCJlcnJvck1lc3NhZ2VcIjoge1xuICAgIC8vICAgXCJvcHRpb25cIjogXCJzaG91bGQgYmUge0Jvb2xlYW59IChodHRwczovZ2l0aHViLmNvbS9vcmcvcmVwbyNhbmNob3IpXCJcbiAgICAvLyB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4ge1xuICAgIHBvcnQ6IDE5NjIsXG4gICAgZW1pdDogdHJ1ZSxcbiAgICBicm93c2VyOiB0cnVlLFxuICAgIHdhdGNoOiAneWVzJyxcbiAgICBwcm9maWxlOiAnJywgXG4gICAgZW52aXJvbm1lbnQ6ICdkZXZlbG9wbWVudCcsIFxuICAgIHZlcmJvc2U6ICdubycsXG4gICAgdG9vbGtpdDogJ21vZGVybicsXG4gICAgcGFja2FnZXM6IG51bGxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFZhcnMoKSB7XG4gIHJldHVybiB7XG4gICAgd2F0Y2hTdGFydGVkIDogZmFsc2UsXG4gICAgZmlyc3RUaW1lIDogdHJ1ZSxcbiAgICBmaXJzdENvbXBpbGU6IHRydWUsXG4gICAgYnJvd3NlckNvdW50IDogMCxcbiAgICBtYW5pZmVzdDogbnVsbCxcbiAgICBleHRQYXRoOiAnZXh0LWFuZ3VsYXInLFxuICAgIHBsdWdpbkVycm9yczogW10sXG4gICAgZGVwczogW10sXG4gICAgcmVidWlsZDogdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvWHR5cGUoc3RyKSB7XG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9fL2csICctJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RGcm9tU291cmNlKG1vZHVsZSwgb3B0aW9ucywgY29tcGlsYXRpb24pIHtcbiAgdHJ5IHtcbiAgICB2YXIganMgPSBtb2R1bGUuX3NvdXJjZS5fdmFsdWVcbiAgICBjb25zdCBsb2d2ID0gcmVxdWlyZSgnLi9wbHVnaW5VdGlsJykubG9ndlxuICAgIGxvZ3Yob3B0aW9ucywnRlVOQ1RJT04gZXh0cmFjdEZyb21Tb3VyY2UnKVxuICAgIHZhciBzdGF0ZW1lbnRzID0gW11cblxuICAgIHZhciBnZW5lcmF0ZSA9IHJlcXVpcmUoXCJAYmFiZWwvZ2VuZXJhdG9yXCIpLmRlZmF1bHRcbiAgICB2YXIgcGFyc2UgPSByZXF1aXJlKFwiYmFieWxvblwiKS5wYXJzZVxuICAgIHZhciB0cmF2ZXJzZSA9IHJlcXVpcmUoXCJhc3QtdHJhdmVyc2VcIilcblxuICAgIHZhciBhc3QgPSBwYXJzZShqcywge1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICAndHlwZXNjcmlwdCcsXG4gICAgICAgICdmbG93JyxcbiAgICAgICAgJ2RvRXhwcmVzc2lvbnMnLFxuICAgICAgICAnb2JqZWN0UmVzdFNwcmVhZCcsXG4gICAgICAgICdjbGFzc1Byb3BlcnRpZXMnLFxuICAgICAgICAnZXhwb3J0RGVmYXVsdEZyb20nLFxuICAgICAgICAnZXhwb3J0RXh0ZW5zaW9ucycsXG4gICAgICAgICdhc3luY0dlbmVyYXRvcnMnLFxuICAgICAgICAnZnVuY3Rpb25CaW5kJyxcbiAgICAgICAgJ2Z1bmN0aW9uU2VudCcsXG4gICAgICAgICdkeW5hbWljSW1wb3J0J1xuICAgICAgXSxcbiAgICAgIHNvdXJjZVR5cGU6ICdtb2R1bGUnXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGFkZFR5cGUoYXJnTm9kZSkge1xuICAgICAgdmFyIHR5cGVcblxuICAgICAgaWYgKGFyZ05vZGUudHlwZSA9PT0gJ1N0cmluZ0xpdGVyYWwnKSB7XG4gICAgICAgIHZhciB4dHlwZSA9IHRvWHR5cGUoYXJnTm9kZS52YWx1ZSlcblxuICAgICAgICBpZiAoeHR5cGUgIT0gJ2V4dHJlYWN0Jykge1xuICAgICAgICAgIHR5cGUgPSB7XG4gICAgICAgICAgICB4dHlwZTogdG9YdHlwZShhcmdOb2RlLnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9IHtcbiAgICAgICAgICB4Y2xhc3M6IGpzLnNsaWNlKGFyZ05vZGUuc3RhcnQsIGFyZ05vZGUuZW5kKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXQgY29uZmlnID0gSlNPTi5zdHJpbmdpZnkodHlwZSlcbiAgICAgICAgc3RhdGVtZW50cy5wdXNoKGBFeHQuY3JlYXRlKCR7Y29uZmlnfSlgKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRyYXZlcnNlKGFzdCwge1xuICAgICAgcHJlOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZS50eXBlID09PSAnQ2FsbEV4cHJlc3Npb24nICYmIG5vZGUuY2FsbGVlICYmIG5vZGUuY2FsbGVlLm9iamVjdCAmJiBub2RlLmNhbGxlZS5vYmplY3QubmFtZSA9PT0gJ0V4dCcpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRzLnB1c2goZ2VuZXJhdGUobm9kZSkuY29kZSlcbiAgICAgICAgfVxuICAgICAgICBpZihub2RlLnR5cGUgPT09ICdTdHJpbmdMaXRlcmFsJykge1xuICAgICAgICAgIGxldCBjb2RlID0gbm9kZS52YWx1ZVxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29kZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKGNvZGUuY2hhckF0KGkpID09ICc8Jykge1xuICAgICAgICAgICAgICBpZiAoY29kZS5zdWJzdHIoaSwgNCkgPT0gJzwhLS0nKSB7XG4gICAgICAgICAgICAgICAgaSArPSA0XG4gICAgICAgICAgICAgICAgaSArPSBjb2RlLnN1YnN0cihpKS5pbmRleE9mKCctLT4nKSArIDNcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlLmNoYXJBdChpKzEpICE9PSAnLycpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBjb2RlLnN1YnN0cmluZyhpKVxuICAgICAgICAgICAgICAgIHZhciBzcGFjZUVuZCA9IHN0YXJ0LmluZGV4T2YoJyAnKVxuICAgICAgICAgICAgICAgIHZhciBuZXdsaW5lRW5kID0gc3RhcnQuaW5kZXhPZignXFxuJylcbiAgICAgICAgICAgICAgICB2YXIgdGFnRW5kID0gc3RhcnQuaW5kZXhPZignPicpXG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IE1hdGgubWluKHNwYWNlRW5kLCBuZXdsaW5lRW5kLCB0YWdFbmQpXG4gICAgICAgICAgICAgICAgaWYgKGVuZCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgeHR5cGUgPSBzdGFydC5zdWJzdHJpbmcoMSwgZW5kKVxuICAgICAgICAgICAgICAgICAgLy8gVE9ETyBhZGQgY29uZGl0aW9uIHRvIGNoZWNrIGZvciBleHQgY29tcG9uZW5ldHMgb25seS5cbiAgICAgICAgICAgICAgICAgIC8vIERvbm90IG5lZWQgdG9YdHlwZSBoZXJlIHNpbmNlIGl0IGNhbiBzYWZlbHkgYmUgYXNzdW1lbmQgdGhlIHNlbGVjdG9yIGlzIHNhbWUgYXMgeHR5cGUgZm9yIGFsbCBjb21wb25lbnRzIGRlZmluZWQuXG4gICAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IHsgeHR5cGU6IHRvWHR5cGUoeHR5cGUpIH1cbiAgICAgICAgICAgICAgICAgIGxldCBjb25maWcgPSBKU09OLnN0cmluZ2lmeSh0eXBlKVxuICAgICAgICAgICAgICAgICAgc3RhdGVtZW50cy5wdXNoKGBFeHQuY3JlYXRlKCR7Y29uZmlnfSlgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLnR5cGUgPT0gJ1ZhcmlhYmxlRGVjbGFyYXRvcicgJiYgbm9kZS5pbml0ICYmIG5vZGUuaW5pdC50eXBlID09ICdDYWxsRXhwcmVzc2lvbicgJiYgbm9kZS5pbml0LmNhbGxlZSkge1xuICAgICAgICAgIGlmIChub2RlLmluaXQuY2FsbGVlLm5hbWUgPT0gJ3JlYWN0aWZ5Jykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmluaXQuYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbHVlTm9kZSA9IG5vZGUuaW5pdC5hcmd1bWVudHNbaV1cbiAgICAgICAgICAgICAgaWYgKCF2YWx1ZU5vZGUpIGNvbnRpbnVlXG4gICAgICAgICAgICAgIGFkZFR5cGUodmFsdWVOb2RlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBQcm9iYWJseSBub3QgcmVxdWlyZWRcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudHNcbiAgfVxuICBjYXRjaChlKSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBjb21waWxhdGlvbi5lcnJvcnMucHVzaCgnZXh0cmFjdEZyb21Tb3VyY2U6ICcgKyBlKVxuICAgIHJldHVybiBbXVxuICB9XG59XG4iXX0=