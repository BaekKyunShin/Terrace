(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb56549a"],{"0b22":function(e,n){e.exports=function(e){var n={keyword:"break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",literal:"true false iota nil",built_in:"append cap close complex copy imag len make new panic print println real recover delete"};return{aliases:["golang"],keywords:n,illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",variants:[e.QUOTE_STRING_MODE,{begin:"'",end:"[^\\\\]'"},{begin:"`",end:"`"}]},{className:"number",variants:[{begin:e.C_NUMBER_RE+"[dflsi]",relevance:1},e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",end:/\s*\{/,excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,keywords:n,illegal:/["']/}]}]}}},"331b":function(e,n,t){"use strict";var a=t("e108"),r=t.n(a);r.a},"3c69":function(e,n){e.exports=function(e){return{lexemes:/[!#@\w]+/,keywords:{keyword:"N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope cp cpf cq cr cs cst cu cuna cunme cw delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu go gr grepa gu gv ha helpf helpg helpt hi hid his ia iabc if ij il im imapc ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf quita qa rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank",built_in:"synIDtrans atan2 range matcharg did_filetype asin feedkeys xor argv complete_check add getwinposx getqflist getwinposy screencol clearmatches empty extend getcmdpos mzeval garbagecollect setreg ceil sqrt diff_hlID inputsecret get getfperm getpid filewritable shiftwidth max sinh isdirectory synID system inputrestore winline atan visualmode inputlist tabpagewinnr round getregtype mapcheck hasmapto histdel argidx findfile sha256 exists toupper getcmdline taglist string getmatches bufnr strftime winwidth bufexists strtrans tabpagebuflist setcmdpos remote_read printf setloclist getpos getline bufwinnr float2nr len getcmdtype diff_filler luaeval resolve libcallnr foldclosedend reverse filter has_key bufname str2float strlen setline getcharmod setbufvar index searchpos shellescape undofile foldclosed setqflist buflisted strchars str2nr virtcol floor remove undotree remote_expr winheight gettabwinvar reltime cursor tabpagenr finddir localtime acos getloclist search tanh matchend rename gettabvar strdisplaywidth type abs py3eval setwinvar tolower wildmenumode log10 spellsuggest bufloaded synconcealed nextnonblank server2client complete settabwinvar executable input wincol setmatches getftype hlID inputsave searchpair or screenrow line settabvar histadd deepcopy strpart remote_peek and eval getftime submatch screenchar winsaveview matchadd mkdir screenattr getfontname libcall reltimestr getfsize winnr invert pow getbufline byte2line soundfold repeat fnameescape tagfiles sin strwidth spellbadword trunc maparg log lispindent hostname setpos globpath remote_foreground getchar synIDattr fnamemodify cscope_connection stridx winbufnr indent min complete_add nr2char searchpairpos inputdialog values matchlist items hlexists strridx browsedir expand fmod pathshorten line2byte argc count getwinvar glob foldtextresult getreg foreground cosh matchdelete has char2nr simplify histget searchdecl iconv winrestcmd pumvisible writefile foldlevel haslocaldir keys cos matchstr foldtext histnr tan tempname getcwd byteidx getbufvar islocked escape eventhandler remote_send serverlist winrestview synstack pyeval prevnonblank readfile cindent filereadable changenr exp"},illegal:/;/,contains:[e.NUMBER_MODE,{className:"string",begin:"'",end:"'",illegal:"\\n"},{className:"string",begin:/"(\\"|\n\\|[^"\n])*"/},e.COMMENT('"',"$"),{className:"variable",begin:/[bwtglsav]:[\w\d_]*/},{className:"function",beginKeywords:"function function!",end:"$",relevance:0,contains:[e.TITLE_MODE,{className:"params",begin:"\\(",end:"\\)"}]},{className:"symbol",begin:/<[\w-]+>/}]}}},"4dd1":function(e,n){e.exports=function(e){var n="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},r={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},i={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,r]};r.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,a,e.REGEXP_MODE];var s=r.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:t,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a,{begin:/[{,]\s*/,relevance:0,contains:[{begin:n+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:n,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+n+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:s}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:s}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},8159:function(e,n,t){},9510:function(e,n){e.exports=function(e){var n={keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},t={className:"meta",begin:/^(>>>|\.\.\.) /},a={className:"subst",begin:/\{/,end:/\}/,keywords:n,illegal:/#/},r={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/(u|b)?r?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,t],relevance:10},{begin:/(u|b)?r?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,t],relevance:10},{begin:/(fr|rf|f)'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,t,a]},{begin:/(fr|rf|f)"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,t,a]},{begin:/(u|r|ur)'/,end:/'/,relevance:10},{begin:/(u|r|ur)"/,end:/"/,relevance:10},{begin:/(b|br)'/,end:/'/},{begin:/(b|br)"/,end:/"/},{begin:/(fr|rf|f)'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,a]},{begin:/(fr|rf|f)"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,a]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},i={className:"number",relevance:0,variants:[{begin:e.BINARY_NUMBER_RE+"[lLjJ]?"},{begin:"\\b(0o[0-7]+)[lLjJ]?"},{begin:e.C_NUMBER_RE+"[lLjJ]?"}]},s={className:"params",begin:/\(/,end:/\)/,contains:["self",t,i,r]};return a.contains=[r,i,t],{aliases:["py","gyp"],keywords:n,illegal:/(<\/|->|\?)|=>/,contains:[t,i,r,e.HASH_COMMENT_MODE,{variants:[{className:"function",beginKeywords:"def"},{className:"class",beginKeywords:"class"}],end:/:/,illegal:/[${=;\n,]/,contains:[e.UNDERSCORE_TITLE_MODE,s,{begin:/->/,endsWithParent:!0,keywords:"None"}]},{className:"meta",begin:/^[\t ]*@/,end:/$/},{begin:/\b(print|exec)\(/}]}}},a70e:function(e,n,t){(function(e){"object"===typeof window&&window||"object"===typeof self&&self;e(n)})(function(e){var n=[],t=Object.keys,a={},r={},i=/^(no-?highlight|plain|text)$/i,s=/\blang(?:uage)?-([\w-]+)\b/i,o=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,l="</span>",c={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function d(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function p(e){return e.nodeName.toLowerCase()}function u(e,n){var t=e&&e.exec(n);return t&&0===t.index}function m(e){return i.test(e)}function g(e){var n,t,a,r,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=s.exec(i),t)return A(t[1])?t[1]:"no-highlight";for(i=i.split(/\s+/),n=0,a=i.length;n<a;n++)if(r=i[n],m(r)||A(r))return r}function f(e){var n,t={},a=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return a.forEach(function(e){for(n in e)t[n]=e[n]}),t}function b(e){var n=[];return function e(t,a){for(var r=t.firstChild;r;r=r.nextSibling)3===r.nodeType?a+=r.nodeValue.length:1===r.nodeType&&(n.push({event:"start",offset:a,node:r}),a=e(r,a),p(r).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:r}));return a}(e,0),n}function h(e,t,a){var r=0,i="",s=[];function o(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function l(e){function t(e){return" "+e.nodeName+'="'+d(e.value).replace('"',"&quot;")+'"'}i+="<"+p(e)+n.map.call(e.attributes,t).join("")+">"}function c(e){i+="</"+p(e)+">"}function u(e){("start"===e.event?l:c)(e.node)}while(e.length||t.length){var m=o();if(i+=d(a.substring(r,m[0].offset)),r=m[0].offset,m===e){s.reverse().forEach(c);do{u(m.splice(0,1)[0]),m=o()}while(m===e&&m.length&&m[0].offset===r);s.reverse().forEach(l)}else"start"===m[0].event?s.push(m[0].node):s.pop(),u(m.splice(0,1)[0])}return i+d(a.substr(r))}function v(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(n){return f(e,{variants:null},n)})),e.cached_variants||e.endsWithParent&&[f(e)]||[e]}function w(e){function n(e){return e&&e.source||e}function a(t,a){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(a?"g":""))}function r(i,s){if(!i.compiled){if(i.compiled=!0,i.keywords=i.keywords||i.beginKeywords,i.keywords){var o={},l=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");o[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"===typeof i.keywords?l("keyword",i.keywords):t(i.keywords).forEach(function(e){l(e,i.keywords[e])}),i.keywords=o}i.lexemesRe=a(i.lexemes||/\w+/,!0),s&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")\\b"),i.begin||(i.begin=/\B|\b/),i.beginRe=a(i.begin),i.endSameAsBegin&&(i.end=i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(i.endRe=a(i.end)),i.terminator_end=n(i.end)||"",i.endsWithParent&&s.terminator_end&&(i.terminator_end+=(i.end?"|":"")+s.terminator_end)),i.illegal&&(i.illegalRe=a(i.illegal)),null==i.relevance&&(i.relevance=1),i.contains||(i.contains=[]),i.contains=Array.prototype.concat.apply([],i.contains.map(function(e){return v("self"===e?i:e)})),i.contains.forEach(function(e){r(e,i)}),i.starts&&r(i.starts,s);var c=i.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([i.terminator_end,i.illegal]).map(n).filter(Boolean);i.terminators=c.length?a(c.join("|"),!0):{exec:function(){return null}}}}r(e)}function y(e,n,t,r){function i(e){return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function s(e,n){var t,a;for(t=0,a=n.contains.length;t<a;t++)if(u(n.contains[t].beginRe,e))return n.contains[t].endSameAsBegin&&(n.contains[t].endRe=i(n.contains[t].beginRe.exec(e)[0])),n.contains[t]}function o(e,n){if(u(e.endRe,n)){while(e.endsParent&&e.parent)e=e.parent;return e}if(e.endsWithParent)return o(e.parent,n)}function p(e,n){return!t&&u(n.illegalRe,e)}function m(e,n){var t=N.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function g(e,n,t,a){var r=a?"":c.classPrefix,i='<span class="'+r,s=t?"":l;return i+=e+'">',i+n+s}function f(){var e,n,t,a;if(!R.keywords)return d(S);a="",n=0,R.lexemesRe.lastIndex=0,t=R.lexemesRe.exec(S);while(t)a+=d(S.substring(n,t.index)),e=m(R,t),e?(L+=e[1],a+=g(e[0],d(t[0]))):a+=d(t[0]),n=R.lexemesRe.lastIndex,t=R.lexemesRe.exec(S);return a+d(S.substr(n))}function b(){var e="string"===typeof R.subLanguage;if(e&&!a[R.subLanguage])return d(S);var n=e?y(R.subLanguage,S,!0,k[R.subLanguage]):E(S,R.subLanguage.length?R.subLanguage:void 0);return R.relevance>0&&(L+=n.relevance),e&&(k[R.subLanguage]=n.top),g(n.language,n.value,!1,!0)}function h(){M+=null!=R.subLanguage?b():f(),S=""}function v(e){M+=e.className?g(e.className,"",!0):"",R=Object.create(e,{parent:{value:R}})}function _(e,n){if(S+=e,null==n)return h(),0;var t=s(n,R);if(t)return t.skip?S+=n:(t.excludeBegin&&(S+=n),h(),t.returnBegin||t.excludeBegin||(S=n)),v(t,n),t.returnBegin?0:n.length;var a=o(R,n);if(a){var r=R;r.skip?S+=n:(r.returnEnd||r.excludeEnd||(S+=n),h(),r.excludeEnd&&(S=n));do{R.className&&(M+=l),R.skip||R.subLanguage||(L+=R.relevance),R=R.parent}while(R!==a.parent);return a.starts&&(a.endSameAsBegin&&(a.starts.endRe=a.endRe),v(a.starts,"")),r.returnEnd?0:n.length}if(p(n,R))throw new Error('Illegal lexeme "'+n+'" for mode "'+(R.className||"<unnamed>")+'"');return S+=n,n.length||1}var N=A(e);if(!N)throw new Error('Unknown language: "'+e+'"');w(N);var x,R=r||N,k={},M="";for(x=R;x!==N;x=x.parent)x.className&&(M=g(x.className,"",!0)+M);var S="",L=0;try{var O,C,T=0;while(1){if(R.terminators.lastIndex=T,O=R.terminators.exec(n),!O)break;C=_(n.substring(T,O.index),O[0]),T=O.index+C}for(_(n.substr(T)),x=R;x.parent;x=x.parent)x.className&&(M+=l);return{relevance:L,value:M,language:e,top:R}}catch(B){if(B.message&&-1!==B.message.indexOf("Illegal"))return{relevance:0,value:d(n)};throw B}}function E(e,n){n=n||c.languages||t(a);var r={relevance:0,value:d(e)},i=r;return n.filter(A).filter(O).forEach(function(n){var t=y(n,e,!1);t.language=n,t.relevance>i.relevance&&(i=t),t.relevance>r.relevance&&(i=r,r=t)}),i.language&&(r.second_best=i),r}function _(e){return c.tabReplace||c.useBR?e.replace(o,function(e,n){return c.useBR&&"\n"===e?"<br>":c.tabReplace?n.replace(/\t/g,c.tabReplace):""}):e}function N(e,n,t){var a=n?r[n]:t,i=[e.trim()];return e.match(/\bhljs\b/)||i.push("hljs"),-1===e.indexOf(a)&&i.push(a),i.join(" ").trim()}function x(e){var n,t,a,r,i,s=g(e);m(s)||(c.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e,i=n.textContent,a=s?y(s,i,!0):E(i),t=b(n),t.length&&(r=document.createElementNS("http://www.w3.org/1999/xhtml","div"),r.innerHTML=a.value,a.value=h(t,b(r),i)),a.value=_(a.value),e.innerHTML=a.value,e.className=N(e.className,s,a.language),e.result={language:a.language,re:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance}))}function R(e){c=f(c,e)}function k(){if(!k.called){k.called=!0;var e=document.querySelectorAll("pre code");n.forEach.call(e,x)}}function M(){addEventListener("DOMContentLoaded",k,!1),addEventListener("load",k,!1)}function S(n,t){var i=a[n]=t(e);i.aliases&&i.aliases.forEach(function(e){r[e]=n})}function L(){return t(a)}function A(e){return e=(e||"").toLowerCase(),a[e]||a[r[e]]}function O(e){var n=A(e);return n&&!n.disableAutodetect}return e.highlight=y,e.highlightAuto=E,e.fixMarkup=_,e.highlightBlock=x,e.configure=R,e.initHighlighting=k,e.initHighlightingOnLoad=M,e.registerLanguage=S,e.listLanguages=L,e.getLanguage=A,e.autoDetection=O,e.inherit=f,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(n,t,a){var r=e.inherit({className:"comment",begin:n,end:t,contains:[]},a||{});return r.contains.push(e.PHRASAL_WORDS_MODE),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),r},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},e})},ac6a:function(e,n,t){for(var a=t("cadf"),r=t("0d58"),i=t("2aba"),s=t("7726"),o=t("32e9"),l=t("84f2"),c=t("2b4c"),d=c("iterator"),p=c("toStringTag"),u=l.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=r(m),f=0;f<g.length;f++){var b,h=g[f],v=m[h],w=s[h],y=w&&w.prototype;if(y&&(y[d]||o(y,d,u),y[p]||o(y,p,h),l[h]=u,v))for(b in a)y[b]||i(y,b,a[b],!0)}},b4a7:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"blog"}},[void 0!==e.year?t("div",{attrs:{id:"blog-contents-element"}},[t("article",[t("div",{staticClass:"inner-title-container"},[t("h1",{attrs:{id:"inner-title"}},[e._v(e._s(e.title))]),t("div",{attrs:{id:"inner-date"}},[e._v(e._s(e.year)+"."+e._s(e.month)+"."+e._s(e.day))])]),t("div",{attrs:{id:"article-content"},domProps:{innerHTML:e._s(e.articleHtmlSource)}})]),t("hr")]):t("div",e._l(e.index,function(n){return t("div",{key:n,staticClass:"blog-list-element"},[t("router-link",{staticClass:"blog-title",attrs:{to:n.uri}},[e._v(e._s(n.title))]),t("span",{staticClass:"blog-date"},[e._v(e._s(n.date))]),t("hr",{staticClass:"separate-line"})],1)}))])},r=[],i=(t("ac6a"),t("a70e")),s=t.n(i);t("8159");s.a.registerLanguage("vim",t("3c69")),s.a.registerLanguage("bash",t("f0f8")),s.a.registerLanguage("python",t("9510")),s.a.registerLanguage("vim",t("3c69")),s.a.registerLanguage("shell",t("b65b")),s.a.registerLanguage("go",t("0b22")),s.a.registerLanguage("javascript",t("4dd1"));var o={name:"devRecordBlog",metaInfo:function(){return void 0===this.title?{title:"Blog",meta:[{charset:"utf-8"},{property:"og:title",content:"Blog",template:function(e){return"".concat(e," :: bkshin")},vmid:"og:title"},{property:"og:description",content:"Article List",template:function(e){return"".concat(e)},vmid:"og:description"}]}:{title:this.titleForMeta,meta:[{charset:"utf-8"},{property:"og:title",content:this.title,template:function(e){return"".concat(e," :: bkshin")},vmid:"og:title"},{property:"og:description",content:"Thank you for reading my article ",template:function(e){return"".concat(e)},vmid:"og:description"}]}},methods:{totheTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},getPage:function(){var e=this;if(void 0!==this.year){this.totheTop();var n="/blog_contents/dev_record/"+this.year+"/"+this.month+"/"+this.day+"/"+this.title+".html";fetch(n).then(function(e){return e.text()}).then(function(n){return e.articleHtmlSource=n})}}},mounted:function(){this.getPage()},updated:function(){var e=document.querySelector("#blog-contents-element");if(null!=e){var n=e.querySelectorAll("h1");if(!(n.length<=1)){var t=e.querySelector("#inner-title");t.innerHTML=n[1].innerHTML,n[1].style.display="none",this.titleForMeta=t.innerHTML,[].forEach.call(document.querySelectorAll("code"),function(e){s.a.highlightBlock(e)})}}},data:function(){return{index:[{title:"BLOG - 8. Neovim 설정",author:'<strong>IUS-release.rpm 설치</strong></h3>\n<p>home directory에서</p>\n<pre class="zsh"><code>sudo yum install -y https://centos7.iuscommunity.org/ius-release.rpm</code></pre>\n<p>IUS는 리눅스를 위한 Red-Hat Package Manager(RPM) 패키지를 제공하는 Community Project입니다. <a href="https://ius.io/">(Reference1</a>)</p>\n<h3 id="파이썬-설치">파이썬 설치</h3>\n<p>본 블로그에서는 python을 사용하지 않습니다. 하지만 아래에서 설치할 Neovim을 사용하기 위해 python이 필요합니다. 파이썬은 아래와 같이 설치합니다.</p>\n<pre class="bash"><code>sudo yum install -y python36u python36u-libs python36u-devel python36u-pip</code></pre>\n<p>파이썬을 설치한 뒤 아래와 같이 조금 손을 봐줘야합니다. 위와 같이 파이썬을 받아오면 python2와 python3가 같이 받아집니다. python2와 python3가 같이 있는 상황에서 <code>python</code>을 부르면 python2가 불립니다. python3는 <code>python3</code>라고 명시를 해줘야 합니다. <code>python</code>을 불렀을 때 python3를 불러오기 위해 아래와 같이 손을 봐주는 것입니다.</p>\n<pre class="bash"><code>which python3.6\ncd /usr/bin\nsudo rm python3\nsudo rm python\nsudo rm pip \nsudo cp python3.6 python3\nsudo cp python2.7 python\nsudo cp pip3.6 pip</code></pre>\n<h3 id="neovim설치-및-권한-변경">Neovim설치 및 권한 변경</h3>\n<p>Neovim의 목적은 쉽게 말해서 vim보다 Color를 많이 지원해 <strong>예쁜 코드 에디터</strong>를 제공하기 위함입니다.</p>\n<pre class="bash"><code>cd\ncd temp\nwget https://github.com/neovim/neovim/releases/download/v0.3.1/nvim.appimage\nchmod 755 nvim.appimage\n./nvim.appimage --appimage-extract\ncd squashfs-root\nsudo mv usr/bin/nvim /usr/bin/nvim\nsudo mv usr/share/nvim /usr/share/nvim\nnvim</code></pre>\n<p>이렇게 하면 Neovim이 실행되는 걸 볼 수 있습니다. <code>--appimage-extract</code>는 appimage의 콘텐츠를 추출하는 기능을 한다. <a href="https://github.com/AppImage/AppImageKit/wiki/Extracting-AppImages">(Reference2)</a></p>\n<p><code>chmod 755</code> 에서 chmod는 <strong>ch</strong>ange <strong>mod</strong>e 의 약자이며, 대상 파일과 디렉토리의 사용권한을 변경하는 명렁어입니다. 문자열 모드와 8진법 수 모드가 있는데 755는 8진법 수 모드를 사용한 것입니다.</p>\n<p>755에서<br />첫번째 숫자(7) = user의 권한<br />두번째 숫자(5) = group의 권한<br />세번째 숫자(5) = other의 권한<br />을 뜻합니다.</p>\n<p>755 = rwxr-xr-x 로 풀어쓸 수 있습니다. r은 파일 읽기 = 4, w는 파일 쓰기 = 2, x는 파일 실행 = 1를 뜻합니다. 즉 755는 user는 읽고, 쓰고, 실행할 수 있고, group과 other은 읽고, 실행만 할 수 있다는 뜻입니다. 4 = 2^2, 2 = 2^1, 1 = 2^0이기 때문에 각각 4, 2, 1이고 8진법 수 모드라 하는 것입니다.</p>\n<p>읽기, 쓰기, 실행이 가능하다고 할 때, r: 4, w:2, x:1이기 때문에 4+2+1 = 7이 되는 것이고, 읽기, 실행만 가능하다고 할 때는, r:4, x:1이기 때문에 4+1 = 5가 되는 것입니다. 이렇게 숫자의 조합으로 3자리를 표현하면 됩니다. <code>chmod 777</code>은 모든 보안을 꺼버립니다. <a href="http://www.incodom.kr/Linux/%EA%B8%B0%EB%B3%B8%EB%AA%85%EB%A0%B9%EC%96%B4/chmod">(Reference3)</a></p>\n<p>chmod로 권한을 변경하기 전 nvim.appimage의 권한은 아래와 같이 664입니다. (<code>ls -al</code>로 권한을 자세히 볼 수 있음)</p>\n<figure>\n<img src="https://cdn.bkshin.com/devRecord/2019/02/11/8_1.PNG" alt="권한설정 전 nvim.appimage" /><figcaption>권한설정 전 nvim.appimage</figcaption>\n</figure>\n<p>-rw-rw-r-- : 파일 접근 권한 분류 표기로, 처음 -는 파일 분류 타입을 뜻합니다. (파일 타입 : d 디렉토리, l(소문자 L) 링크 카운터, s 소켓, p 파이프, - 일반, c 특수문자, b 특수블럭)</p>\n<p>664이면 실행이 안되므로 아래와 같이 실행이 가능하게 755로 바꿔줬습니다. 또한, user말고 다른 사람은 파일 쓰기를 못하게 한 것입니다.</p>\n<figure>\n<img src="https://cdn.bkshin.com/devRecord/2019/02/11/8_2.PNG" alt="권한설정 후 nvim.appimage" /><figcaption>권한설정 후 nvim.appimage</figcaption>\n</figure>\n<pre class="bash"><code>sudo mv usr/bin/nvim /usr/bin/nvim\nsudo mv usr/share/nvim /usr/share/nvim</code></pre>\n<p>위 코드는 현재 temp/squashfs-root 디렉토리 안에 있는 nvim을 환경변수가 있는 곳으로 옮겨준다는 뜻입니다. nvim도 어디서든 사용할 수 있게 하는 명령어입니다.</p>\n<h3 id="vundle-설치">Vundle 설치</h3>\n<pre class="bash"><code>cd\ngit clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim</code></pre>\n<p>Vundle은 vim + Bundle의 합성어로 vim의 플러그인을 통합 관리해주는 도구입니다.</p>\n<h3 id="vim-config-설치">Vim config 설치</h3>\n<pre class="bash"><code>cd ~/.config\ngit clone https://github.com/hrzon/mjVimPack\nmv mjVimPack nvim\nnvim\n# (enter, esc 후에)\n:PluginInstall\n:UpdateRemotePlugins\n:q\nnvim</code></pre>\n<p>명재선생님이 만들어 놓은 mjVimPack을 nvim으로 수정하고 실행하면 정상적으로 작동하는 것을 볼 수 있습니다. 이제 .zshrc에 아래 코드를 추가해줍니다. 그러면 nvim이 아니라 v라고만 쳐도 nvim을 실행시킬 수 있습니다.</p>\n<pre class="bash"><code>alias v=&quot;nvim&quot;</code></pre>\n<h2 id="reference">Reference',uri:"/devRecordBlog/2019/02/11/blog-settingNeovim/",date:"2019/02/11"},{title:"BLOG - 7. Go 언어 설치",author:'다른 언어를 사용해도 되지만 본 프로젝트에서는 Go 언어를 사용할 것입니다. Go 언어 설치를 위해서는 home directory에서</p>\n<pre class="bash"><code>mkdir temp\ncd temp\nsudo yum -y install wget\nwget https://dl.google.com/go/go1.11.4.linux-amd64.tar.gz</code></pre>\n<p>wget으로 받아오는 go 버전은 계속 업그레이드가 될 수 있으므로 최신버전으로 설치합니다. golang 홈페이지에 들어가면 아래와 같이 Linux 최신버전을 볼 수 있습니다.</p>\n<figure>\n<img src="https://cdn.bkshin.com/devRecord/2019/02/10/7_1.PNG" alt="golang 메인 홈페이지" /><figcaption>golang 메인 홈페이지</figcaption>\n</figure>\n<p>go를 다운받을 때 확장자가 tar.gz입니다. 이는 압축 확장자이며, 압축을 풀어 사용할 수 있습니다. 다운받은 go 아카이브의 압축을 아래와 같이 풉니다. <a href="http://sarghis.com/blog/468/">(Reference1)</a> temp directory에서</p>\n<pre class="bash"><code>tar -xzvf go1.11.4.linux-amd64.tar.gz</code></pre>\n<pre class="bash"><code>sudo mv go /usr/local/</code></pre>\n<pre class="bash"><code>vi ~/.zshrc</code></pre>\n<p>아래처럼, 환경변수 $PATH를 추가시킵니다. 환경변수를 추가시킴으로써 go를 어떤 디렉토리에서도 실행할 수 있게 합니다.</p>\n<pre class="bash"><code>export PATH=/usr/local/go/bin:$PATH</code></pre>\n<pre class="bash"><code>source ~/.zshrc</code></pre>\n<p>$PATH는 환경 변수를 뜻합니다. 터미널에서 프로그램 명령어를 입력하면 $PATH 환경 변수에 저장된 디렉토리 목록에서 명령을 찾습니다. $PATH에 현재 나열된 목록을 확인하려면 아래와 같이 입력하면 됩니다.</p>\n<pre class="bash"><code>echo $PATH</code></pre>\n<p>그러면 아래와 같이 콜론으로 구분된 디렉토리 목록이 반환됩니다.</p>\n<pre class="bash"><code>/usr/local/go/bin:/usr/local/bin:/usr/bin:/home/bkshin/bin:/usr/local/sbin:/usr/sbin</code></pre>\n<p>위에서 go 디렉토리도 추가했기 때문에 /usr/local/go/bin도 잘 추가된 것을 볼 수 있습니다. <a href="https://askubuntu.com/questions/551990/what-does-path-mean">(Reference2)</a> 이제 아무 디렉토리에서나 <code>go</code>를 입력해주면 go가 잘 작동하는 할 것입니다.</p>\n<h2 id="reference">Reference',uri:"/devRecordBlog/2019/02/10/blog-installGolang/",date:"2019/02/10"},{title:"BLOG - 6. 개발환경세팅 II",author:'<strong>NPM설치</strong></h3>\n<p>NPM(Node Package Manager)란 자바스크립트 기반의 패키지 매니저입니다. <a href="https://www.w3schools.com/nodejs/nodejs_npm.asp">(Reference1)</a> 이름처럼 NPM은 Node.js로 만들어진 모듈을 웹에서 받아 설치하고 관리해주는 프로그램입니다. 사용자는 명령어를 통해 공개된 모듈을 설치하고 활용할 수 있습니다.</p>\n<p>NPM 및 vue-cli 3.0을 아래와 같이 설치할 수 있습니다. vue-cli를 통해 터미널에서 간단한 명령어로 프로젝트 디렉토리를 만들 수 있습니다.</p>\n<pre class="bash"><code>sudo yum -y install npm\nsudo npm install -g @vue/cli</code></pre>\n<p>(-g는 global의 약자이며, 다른 계정들에서도 사용할 수 있음)</p>\n<pre class="bash"><code>vue --verison</code></pre>\n<p>을 치면 Node version을 업그레이드 하라는 경고 메시지가 나올 겁니다.</p>\n<h3 id="npm-업그레이드">NPM 업그레이드</h3>\n<pre class="bash"><code>sudo npm cache clean -f\nsudo npm install -g n\nsudo n stable</code></pre>\n<p>위 코드로 NPM 업그레이드를 합니다. 우선, 강제로 캐시를 제거하고, n 모듈을 설치합니다. 마지막으로 n모듈을 사용하여 Node.js를 설치합니다. <a href="https://velopert.com/1351">(Reference2)</a></p>\n<pre class="bash"><code>vue --verison</code></pre>\n<p>을 치면 이제 정상적으로 verison 정보가 뜹니다.</p>\n<h3 id="project-directory-구성">Project Directory 구성</h3>\n<pre class="bash"><code>cd\nmkdir terrace\ncd terrace\nmkdir frontend\nvue create home</code></pre>\n<p>Project main directory(여기서는 terrace)를 만들고 그 하단에 frontend directory를 만든 뒤 vue를 create합니다. vue-cli가 home directory 하단에 자동으로 project directory를 만들어 줍니다. \'기본 npm registry는 느리다고 더 빠른 installation을 하겠습니까?\'라는 메시지가 뜨면 Yes를 해줍니다. 그 후 default (babel, eslint)를 선택해주고 설치합니다.</p>\n<p>home directory로 들어가보면 아래와 같이 기본적인 project directory가 구성되어 있을 것입니다.</p>\n<ul>\n<li>dist: 빌드 결과물이 담겨 있는 디렉토리입니다. <code>npm run build</code> 시 내용물이 담깁니다. 빌드에 대해서는 나중에 다시 설명하겠습니다.</li>\n<li>node_modules: npm 으로 설치한 것들이 담겨있는 폴더입니다. 용량이 꽤 크기 때문에 github에 올리면 안됩니다. (.gitignore에 추가)</li>\n<li>public: 공용으로 접근 가능한 파일이 위치합니다. favicon, 블로그 아티클 등이 담깁니다.</li>\n<li>src: vue 소스코드가 담깁니다.</li>\n</ul>\n<p>나머지 json이나 js파일은 직접 건들 건 아니기 때문에 신경쓰지 맙시다. <a href="http://vuejs.kr/vue/vue-cli/2018/01/27/vue-cli-3/">(Reference3)</a></p>\n<pre class="bash"><code>cd home\nnpm run serve</code></pre>\n<figure>\n<img src="https://cdn.bkshin.com/devRecord/2019/01/28/6_1.PNG" alt="App running" /><figcaption>App running</figcaption>\n</figure>\n<p>run serve후에 위와 같이 뜨면 정상적으로 성공한 것입니다.</p>\n<p>이제 아래 명령어로 빌드를 해줍니다.</p>\n<pre class="bash"><code>npm run build</code></pre>\n<p>build 결과물은 dist directory에 담깁니다.</p>\n<h3 id="http-server-설치">http-server 설치</h3>\n<p>로컬에서 만든 작업물을 웹 상에서 띄우기 위해서는 웹 서버가 필요합니다. 여기서는 http-server를 사용할 것이며, 웹 서버에 대한 이해가 부족하다면 <a href="https://developer.mozilla.org/ko/docs/Learn/Common_questions/What_is_a_web_server">(Reference4)</a> 링크를 참고하시기 바랍니다.</p>\n<pre class="bash"><code>cd dist\nsudo npm install –g http-server \nhttp-server .</code></pre>\n<p>위와 같이 dist 디렉토리에 http-server를 설치합니다. http-server 옆에 .은 현재 디렉토리를 의미합니다. <a href="https://www.npmjs.com/package/http-server">(Reference5)</a></p>\n<h3 id="localhost-접속">localhost 접속</h3>\n<p>http-server를 실행했기 때문에 인터넷을 켜서 주소창에 localhost:8881을 치면 Vue 기본 페이지가 떠야하는데 뜨질 않습니다. (localhost옆에 :8881은 호스트 포트를 의미함)</p>\n<p>이는 방화벽이 막혀있어서 그런 것입니다.</p>\n<p>home directory에서 아래와 같이 포트에 방화벽을 열어줍니다. (8080, 80 등이 포트를 의미함)</p>\n<pre class="bash"><code>sudo firewall-cmd --zone=public --add-port=8080/tcp --permanent\nsudo firewall-cmd --zone=public --add-port=80/tcp --permanent\nsudo firewall-cmd --reload</code></pre>\n<p>이젠 http-server . 혹은 npm run serve를 한 뒤 localhost:8881로 접속하면 vue 기본 페이지가 뜹니다.</p>\n<figure>\n<img src="https://cdn.bkshin.com/devRecord/2019/01/28/6_2.PNG" alt="Vue 기본 페이지" /><figcaption>Vue 기본 페이지</figcaption>\n</figure>\n<p>frontend directory 안에서 vue-cli로 home project를 생성했습니다. home directory 밑에는 서버와 배포시스템이 추가됩니다. frontend directory 밑에는 문서 변환과 프리렌더링 프로그램이 추가될 것입니다. <strong>드디어 눈에 보이는 무언가가 생겨났습니다!</strong><br /><br></p>\n<h2 id="reference">Reference',uri:"/devRecordBlog/2019/01/28/blog-setting2/",date:"2019/01/28"},{title:"BLOG - 5. 개발환경세팅 I",author:"myself",uri:"/devRecordBlog/2019/01/24/blog-setting1/",date:"2019/01/24"},{title:"BLOG - 4. PuTTY로 가상환경 접속",author:"myself",uri:"/devRecordBlog/2019/01/23/blog-puttyConnection/",date:"2019/01/23"},{title:"BLOG - 3. 네트워크 포트포워딩",author:"myself",uri:"/devRecordBlog/2019/01/22/blog-portForwarding/",date:"2019/01/22"},{title:"BLOG - 2. 네트워크 연결 및 커널",author:"myself",uri:"/devRecordBlog/2019/01/21/blog-network/",date:"2019/01/21"},{title:"BLOG - 1. 가상환경 설치 및 실행",author:"myself",uri:"/devRecordBlog/2019/01/20/blog-CentOS/",date:"2019/01/20"},{title:"첫 글",author:"myself",uri:"/devRecordBlog/2018/12/12/thanks-to/",date:"2018/12/12"}],year:this.$route.params.year2,month:this.$route.params.month2,day:this.$route.params.day2,title:this.$route.params.title2,articleHtmlSource:""}},watch:{$route:function(e){this.year=e.params.year2,this.month=e.params.month2,this.day=e.params.day2,this.title=e.params.title2,this.getPage()}}},l=o,c=(t("331b"),t("2877")),d=Object(c["a"])(l,a,r,!1,null,"3600f192",null);d.options.__file="DevRecordBlog.vue";n["default"]=d.exports},b65b:function(e,n){e.exports=function(e){return{aliases:["console"],contains:[{className:"meta",begin:"^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",starts:{end:"$",subLanguage:"bash"}}]}}},e108:function(e,n,t){},f0f8:function(e,n){e.exports=function(e){var n={className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{(.*?)}/}]},t={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n,{className:"variable",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]}]},a={className:"string",begin:/'/,end:/'/};return{aliases:["sh","zsh"],lexemes:/\b-?[a-z\._]+\b/,keywords:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},contains:[{className:"meta",begin:/^#![^\n]+sh\s*$/,relevance:10},{className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},e.HASH_COMMENT_MODE,t,a,n]}}}}]);
//# sourceMappingURL=chunk-fb56549a.1b625fcb.js.map