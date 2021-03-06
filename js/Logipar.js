// Generated by Haxe 4.0.0-rc.2+77068e10c
(function ($hx_exports) { "use strict";
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	if(!(c > 8 && c < 14)) {
		return c == 32;
	} else {
		return true;
	}
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,r,l - r);
	} else {
		return s;
	}
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,0,l - r);
	} else {
		return s;
	}
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
var haxe_ds_GenericCell = function(elt,next) {
	this.elt = elt;
	this.next = next;
};
haxe_ds_GenericCell.__name__ = true;
var haxe_ds_GenericStack = function() {
};
haxe_ds_GenericStack.__name__ = true;
var haxe_ds__$StringMap_StringMapIterator = function(map,keys) {
	this.map = map;
	this.keys = keys;
	this.index = 0;
	this.count = keys.length;
};
haxe_ds__$StringMap_StringMapIterator.__name__ = true;
haxe_ds__$StringMap_StringMapIterator.prototype = {
	hasNext: function() {
		return this.index < this.count;
	}
	,next: function() {
		var _this = this.map;
		var key = this.keys[this.index++];
		if(__map_reserved[key] != null) {
			return _this.getReserved(key);
		} else {
			return _this.h[key];
		}
	}
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.prototype = {
	setReserved: function(key,value) {
		if(this.rh == null) {
			this.rh = { };
		}
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) {
			return null;
		} else {
			return this.rh["$" + key];
		}
	}
	,existsReserved: function(key) {
		if(this.rh == null) {
			return false;
		}
		return this.rh.hasOwnProperty("$" + key);
	}
	,keys: function() {
		return HxOverrides.iter(this.arrayKeys());
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) {
			out.push(key);
		}
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) {
				out.push(key.substr(1));
			}
			}
		}
		return out;
	}
	,toString: function() {
		var s_b = "";
		s_b += "{";
		var keys = this.arrayKeys();
		var _g = 0;
		var _g1 = keys.length;
		while(_g < _g1) {
			var i = _g++;
			var k = keys[i];
			s_b += k == null ? "null" : "" + k;
			s_b += " => ";
			s_b += Std.string(Std.string(__map_reserved[k] != null ? this.getReserved(k) : this.h[k]));
			if(i < keys.length - 1) {
				s_b += ", ";
			}
		}
		s_b += "}";
		return s_b;
	}
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	if(Error.captureStackTrace) {
		Error.captureStackTrace(this,js__$Boot_HaxeError);
	}
};
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
});
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var n = e.__constructs__[o._hx_index];
			var con = e[n];
			if(con.__params__) {
				s += "\t";
				var tmp = n + "(";
				var _g = [];
				var _g1 = 0;
				var _g2 = con.__params__;
				while(_g1 < _g2.length) {
					var p = _g2[_g1];
					++_g1;
					_g.push(js_Boot.__string_rec(o[p],s));
				}
				return tmp + _g.join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g3 = 0;
			var _g11 = l;
			while(_g3 < _g11) {
				var i1 = _g3++;
				str += (i1 > 0 ? "," : "") + js_Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e1 ) {
			var e2 = ((e1) instanceof js__$Boot_HaxeError) ? e1.val : e1;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str1 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str1.length != 2) {
			str1 += ", \n";
		}
		str1 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str1 += "\n" + s + "}";
		return str1;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var Logipar = $hx_exports["Logipar"] = function() {
	var _g = new haxe_ds_StringMap();
	if(__map_reserved["AND"] != null) {
		_g.setReserved("AND","AND");
	} else {
		_g.h["AND"] = "AND";
	}
	if(__map_reserved["OR"] != null) {
		_g.setReserved("OR","OR");
	} else {
		_g.h["OR"] = "OR";
	}
	if(__map_reserved["XOR"] != null) {
		_g.setReserved("XOR","XOR");
	} else {
		_g.h["XOR"] = "XOR";
	}
	if(__map_reserved["NOT"] != null) {
		_g.setReserved("NOT","NOT");
	} else {
		_g.h["NOT"] = "NOT";
	}
	if(__map_reserved["OPEN"] != null) {
		_g.setReserved("OPEN","(");
	} else {
		_g.h["OPEN"] = "(";
	}
	if(__map_reserved["CLOSE"] != null) {
		_g.setReserved("CLOSE",")");
	} else {
		_g.h["CLOSE"] = ")";
	}
	this.syntax = _g;
	this.mergeAdjacentLiterals = true;
	this.caseSensitive = true;
	this.quotations = ["\"","'"];
};
Logipar.__name__ = true;
Logipar.prototype = {
	overwrite: function(op,value) {
		var _this = this.syntax;
		if(__map_reserved[op] != null ? _this.existsReserved(op) : _this.h.hasOwnProperty(op)) {
			var _this1 = this.syntax;
			if(__map_reserved[op] != null) {
				_this1.setReserved(op,value);
			} else {
				_this1.h[op] = value;
			}
		}
	}
	,parse: function(logic_string) {
		var tokens = this.tokenize(logic_string);
		var types = this.typeize(tokens);
		if(this.mergeAdjacentLiterals) {
			types = this.mergeLiterals(types);
		}
		var reversepolish = this.shunt(types);
		this.tree = this.treeify(reversepolish);
		return this.tree;
	}
	,stringify: function(f) {
		if(this.tree == null) {
			return null;
		} else {
			return this.tree.fancyString(f);
		}
	}
	,walk: function(f) {
		this.tree.walk(f);
	}
	,filterFunction: function(f) {
		var enclosed = this.tree;
		return function(a) {
			if(enclosed == null) {
				return true;
			}
			return enclosed.check(a,f);
		};
	}
	,toString: function() {
		return this.stringify();
	}
	,equals: function(b) {
		return this.tree.equals(b.tree);
	}
	,mergeLiterals: function(tokens) {
		var merged = [];
		var _g = 0;
		var _g1 = tokens.length;
		while(_g < _g1) {
			var i = _g++;
			if(tokens[i].type == "LITERAL") {
				if(i > 0 && merged[merged.length - 1].type == "LITERAL") {
					merged[merged.length - 1].literal += " " + tokens[i].literal;
					continue;
				}
			}
			merged.push(tokens[i]);
		}
		return merged;
	}
	,treeify: function(tokens) {
		var stack = new haxe_ds_GenericStack();
		var _g = 0;
		var _g1 = tokens.length;
		while(_g < _g1) {
			var i = _g++;
			var token = tokens[i];
			var n = new Node(token);
			if(token.type != "LITERAL") {
				if(stack.head == null) {
					var key = token.type;
					var _this = this.syntax;
					throw new js__$Boot_HaxeError("An '" + (__map_reserved[key] != null ? _this.getReserved(key) : _this.h[key]) + "' is missing a value to operate on (on its right).");
				}
				var k = stack.head;
				var tmp;
				if(k == null) {
					tmp = null;
				} else {
					stack.head = k.next;
					tmp = k.elt;
				}
				n.set_right(tmp);
				if(token.type != "NOT") {
					if(stack.head == null) {
						var key1 = token.type;
						var _this1 = this.syntax;
						throw new js__$Boot_HaxeError("An '" + (__map_reserved[key1] != null ? _this1.getReserved(key1) : _this1.h[key1]) + "' is missing a value to operate on (on its left).");
					}
					var k1 = stack.head;
					var tmp1;
					if(k1 == null) {
						tmp1 = null;
					} else {
						stack.head = k1.next;
						tmp1 = k1.elt;
					}
					n.set_left(tmp1);
				}
			}
			stack.head = new haxe_ds_GenericCell(n,stack.head);
		}
		var k2 = stack.head;
		var parsetree;
		if(k2 == null) {
			parsetree = null;
		} else {
			stack.head = k2.next;
			parsetree = k2.elt;
		}
		var parsetree1 = parsetree;
		if(stack.head != null) {
			throw new js__$Boot_HaxeError("Invalid logic string.  Do you have parentheses in your literals?");
		}
		return parsetree1;
	}
	,shunt: function(tokens) {
		var output = [];
		var operators = new haxe_ds_GenericStack();
		var _g = 0;
		var _g1 = tokens.length;
		while(_g < _g1) {
			var i = _g++;
			var token = tokens[i];
			switch(token.type) {
			case "CLOSE":
				while(true) {
					var k = operators.head;
					var op;
					if(k == null) {
						op = null;
					} else {
						operators.head = k.next;
						op = k.elt;
					}
					var op1 = op;
					if(op1.type == "OPEN") {
						break;
					}
					if(operators.head == null) {
						throw new js__$Boot_HaxeError("Mismatched parentheses.");
					}
					output.push(op1);
				}
				break;
			case "LITERAL":
				output.push(token);
				break;
			case "OPEN":
				operators.head = new haxe_ds_GenericCell(token,operators.head);
				break;
			default:
				while(operators.head != null) {
					var prev = operators.head == null ? null : operators.head.elt;
					if(prev.type == "OPEN") {
						break;
					}
					if(prev.precedence() <= token.precedence()) {
						break;
					}
					var k1 = operators.head;
					var tmp;
					if(k1 == null) {
						tmp = null;
					} else {
						operators.head = k1.next;
						tmp = k1.elt;
					}
					output.push(tmp);
				}
				operators.head = new haxe_ds_GenericCell(token,operators.head);
			}
		}
		while(operators.head != null) {
			var k2 = operators.head;
			var o;
			if(k2 == null) {
				o = null;
			} else {
				operators.head = k2.next;
				o = k2.elt;
			}
			var o1 = o;
			if(o1.type == "OPEN") {
				throw new js__$Boot_HaxeError("Mismatched parentheses.");
			}
			output.push(o1);
		}
		return output;
	}
	,tentativelyLower: function(s) {
		if(this.caseSensitive) {
			return s;
		} else {
			return (s == null ? "null" : "" + s).toLowerCase();
		}
	}
	,tokenize: function(str) {
		var tokens = [];
		var _g = [];
		var _this = this.syntax;
		var x = new haxe_ds__$StringMap_StringMapIterator(_this,_this.arrayKeys());
		while(x.hasNext()) {
			var x1 = x.next();
			_g.push(this.tentativelyLower(x1));
		}
		var keys = _g;
		var quotation = null;
		var current = "";
		var _g1 = 0;
		var _g2 = str.length;
		while(_g1 < _g2) {
			var i = _g1++;
			var c = str.charAt(i);
			if(this.quotations.indexOf(c) != -1) {
				if(quotation == null) {
					quotation = c;
				} else if(quotation == c) {
					quotation = null;
				}
			}
			if(quotation != null || keys.indexOf(this.tentativelyLower(c)) == -1) {
				if(StringTools.isSpace(c,0) && quotation == null) {
					if(current.length > 0) {
						tokens.push(current);
					}
					current = "";
				} else {
					current += c;
				}
			} else {
				if(current.length > 0) {
					tokens.push(current);
				}
				current = "";
				tokens.push(c);
			}
		}
		if(StringTools.trim(current).length > 0) {
			tokens.push(StringTools.trim(current));
		}
		return tokens;
	}
	,tokenType: function(token) {
		var key = this.syntax.keys();
		while(key.hasNext()) {
			var key1 = key.next();
			var tmp = this.tentativelyLower(token);
			var _this = this.syntax;
			if(tmp == this.tentativelyLower(__map_reserved[key1] != null ? _this.getReserved(key1) : _this.h[key1])) {
				return new Token(key1);
			}
		}
		return new Token("LITERAL",token);
	}
	,typeize: function(tokens) {
		var _g = [];
		var _g1 = 0;
		var _g2 = tokens.length;
		while(_g1 < _g2) {
			var i = _g1++;
			_g.push(this.tokenType(tokens[i]));
		}
		return _g;
	}
};
var Node = $hx_exports["Node"] = function(token) {
	this.bracketing = Node.MINIMAL_BRACKETS;
	this.token = token;
};
Node.__name__ = true;
Node.prototype = {
	set_left: function(n) {
		n.parent = this;
		return this.left = n;
	}
	,set_right: function(n) {
		n.parent = this;
		return this.right = n;
	}
	,toString: function() {
		return this.fancyString();
	}
	,fancyString: function(f) {
		return this._fancyString(this,f);
	}
	,equals: function(b) {
		if(this.token.equals(b.token)) {
			if(b == null) {
				return false;
			}
			if(this.left == null && b.left == null || this.left != null && this.left.equals(b.left)) {
				if(!(this.right == null && b.right == null)) {
					if(this.right != null) {
						return this.right.equals(b.right);
					} else {
						return false;
					}
				} else {
					return true;
				}
			} else {
				return false;
			}
		}
		return false;
	}
	,walk: function(f) {
		f(this);
		if(this.left != null) {
			f(this.left);
		}
		if(this.right != null) {
			f(this.right);
		}
	}
	,bracket: function(str) {
		if(this.bracketing == "MAXIMAL_BRACKETS" || this.parent != null && this.parent.token.precedence() > this.token.precedence()) {
			return "(" + str + ")";
		}
		return str;
	}
	,_fancyString: function(n,f) {
		var s = null;
		if(f != null) {
			var f1 = $bind(this,this._fancyString);
			var f2 = f;
			n.f = function(n1) {
				return f1(n1,f2);
			};
			s = f(n);
			n.f = null;
		}
		if(s != null) {
			return s;
		}
		switch(n.token.type) {
		case "LITERAL":
			return "{" + n.token.literal + "}";
		case "NOT":
			return this.bracket("NOT " + n.right.fancyString(f));
		default:
			return this.bracket(n.left.fancyString(f) + " " + Std.string(n.token.type) + " " + n.right.fancyString(f));
		}
	}
	,check: function(a,f) {
		switch(this.token.type) {
		case "AND":
			if(this.left.check(a,f)) {
				return this.right.check(a,f);
			} else {
				return false;
			}
			break;
		case "LITERAL":
			return f(a,this.token.literal);
		case "NOT":
			return !this.right.check(a,f);
		case "OR":
			if(!this.left.check(a,f)) {
				return this.right.check(a,f);
			} else {
				return true;
			}
			break;
		case "XOR":
			var l = this.left.check(a,f);
			var r = this.right.check(a,f);
			if(!(!l && r)) {
				if(l) {
					return !r;
				} else {
					return false;
				}
			} else {
				return true;
			}
			break;
		default:
			throw new js__$Boot_HaxeError("Unexpected token encountered.");
		}
	}
};
var Token = $hx_exports["Token"] = function(type,literal) {
	this.type = type;
	this.literal = literal;
};
Token.__name__ = true;
Token.prototype = {
	precedence: function() {
		switch(this.type) {
		case "AND":
			return 2;
		case "LITERAL":
			return 4;
		case "NOT":
			return 3;
		case "OR":case "XOR":
			return 1;
		default:
			return 0;
		}
	}
	,equals: function(b) {
		if(this.type == b.type) {
			return this.literal == b.literal;
		} else {
			return false;
		}
	}
	,toString: function() {
		if(this.type == "LITERAL") {
			return "LITERAL(" + this.literal + ")";
		}
		return Std.string(this.type);
	}
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
String.__name__ = true;
Array.__name__ = true;
var __map_reserved = {};
Object.defineProperty(js__$Boot_HaxeError.prototype,"message",{ get : function() {
	return String(this.val);
}});
js_Boot.__toStr = ({ }).toString;
Node.MINIMAL_BRACKETS = "MINIMAL_BRACKETS";
Node.MAXIMAL_BRACKETS = "MAXIMAL_BRACKETS";
Token.AND = "AND";
Token.OR = "OR";
Token.XOR = "XOR";
Token.NOT = "NOT";
Token.OPEN = "OPEN";
Token.CLOSE = "CLOSE";
Token.LITERAL = "LITERAL";
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this);
