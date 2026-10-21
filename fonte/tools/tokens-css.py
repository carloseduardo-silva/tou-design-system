import json,sys
P=sys.argv[1]; tk=json.load(open(P+'/tokens.json'))
esc=lambda n:n.replace('.','\\.')
def val(v,th):
    v=v.get(th,v['light']) if isinstance(v,dict) else v
    return f"var(--{v[1:-1]})" if v.startswith('{') else v
def css_theme(th):
    return ''.join(f"--{esc(c['name'])}:{val(c['value'],th)};" for fam in ['color','shadow'] for c in tk[fam]['tokens'])
css=''
for f in tk['type']['fonts']:
    css+=f"@font-face{{font-family:'{f['family']}';src:url('{f['file']}');font-weight:{f['weight']};font-style:{f['style']}}}\n"
css+=":root,[data-theme=light]{"+css_theme('light')+"}\n[data-theme=dark]{"+css_theme('dark')+"}\n[data-theme=navy]{"+css_theme('navy')+"}\n:root{"
for fam in ['spacing','radius','duration','easing','breakpoint']:
    for t in tk[fam]['tokens']: css+=f"--{esc(t['name'])}:{t['value']};"
for k,v in tk['type']['families'].items(): css+=f"--font-{k}:{v};"
css+="}\n"
for g in tk['type']['groups']:
    for s in g['styles']:
        fam=s.get('family',g['family'])
        lh=s['lineHeight']
        css+=f".{s['name']}{{font-family:var(--font-{fam});font-size:{s['fontSize']};line-height:{lh};font-weight:{s['fontWeight']};"+(f"letter-spacing:{s['letterSpacing']};" if 'letterSpacing' in s else '')+(f"font-style:{s['fontStyle']};" if 'fontStyle' in s else '')+"}\n"
open(sys.argv[2],'w').write(css)
