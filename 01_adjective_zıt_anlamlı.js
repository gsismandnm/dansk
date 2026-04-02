const title = "Adjectives - Antonyms 🎭";
const defaultWords = [
{word:"åben (açık)", meaning:"lukket"},
{word:"lukket (kapalı)", meaning:"åben"},

{word:"ægte (gerçek)", meaning:"falsk"},
{word:"falsk (sahte)", meaning:"ægte"},

{word:"aktiv (aktif)", meaning:"passiv"},
{word:"passiv (pasif)", meaning:"aktiv"},

{word:"billig (ucuz)", meaning:"dyr"},
{word:"dyr (pahalı)", meaning:"billig"},

{word:"beskidt (kirli)", meaning:"ren"},
{word:"ren (temiz)", meaning:"beskidt"},

{word:"blød (yumuşak)", meaning:"hård"},
{word:"hård (sert)", meaning:"blød"},

{word:"bred (geniş)", meaning:"smal"},
{word:"smal (dar)", meaning:"bred"},

{word:"dårlig (kötü)", meaning:"god"},
{word:"god (iyi)", meaning:"dårlig"},

{word:"dyb (derin)", meaning:"lav"},
{word:"lav (alçak)", meaning:"dyb"},

{word:"effektiv (etkili)", meaning:"ineffektiv"},
{word:"ineffektiv (etkisiz)", meaning:"effektiv"},

{word:"enkel (basit)", meaning:"kompliceret"},
{word:"kompliceret (karmaşık)", meaning:"enkel"},

{word:"farlig (tehlikeli)", meaning:"sikker"},
{word:"sikker (güvenli)", meaning:"farlig"},

{word:"fast (sabit)", meaning:"løs"},
{word:"løs (gevşek)", meaning:"fast"},

{word:"fattig (fakir)", meaning:"rig"},
{word:"rig (zengin)", meaning:"fattig"},

{word:"flot (şık)", meaning:"grim"},
{word:"grim (çirkin)", meaning:"flot"},

{word:"forkert (yanlış)", meaning:"rigtig"},
{word:"rigtig (doğru)", meaning:"forkert"},

{word:"fri (özgür)", meaning:"optaget"},
{word:"optaget (meşgul)", meaning:"fri"},

{word:"frisk (taze)", meaning:"gammel"},
{word:"gammel (eski)", meaning:"frisk"},

{word:"fuld (dolu)", meaning:"tom"},
{word:"tom (boş)", meaning:"fuld"},

{word:"glad (mutlu)", meaning:"trist"},
{word:"trist (üzgün)", meaning:"glad"},

{word:"hurtig (hızlı)", meaning:"langsom"},
{word:"langsom (yavaş)", meaning:"hurtig"},

{word:"interessant (ilginç)", meaning:"kedelig"},
{word:"kedelig (sıkıcı)", meaning:"interessant"},

{word:"klog (akıllı)", meaning:"dum"},
{word:"dum (aptal)", meaning:"klog"},

{word:"kold (soğuk)", meaning:"varm"},
{word:"varm (sıcak)", meaning:"kold"},

{word:"kort (kısa)", meaning:"lang"},
{word:"lang (uzun)", meaning:"kort"},

{word:"kraftig (güçlü)", meaning:"svag"},
{word:"svag (zayıf)", meaning:"kraftig"},

{word:"let (kolay)", meaning:"svær"},
{word:"svær (zor)", meaning:"let"},

{word:"lille (küçük)", meaning:"stor"},
{word:"stor (büyük)", meaning:"lille"},

{word:"lykkelig (mutlu)", meaning:"ulykkelig"},
{word:"ulykkelig (mutsuz)", meaning:"lykkelig"},

{word:"moderne (modern)", meaning:"gammeldags"},
{word:"gammeldags (eski moda)", meaning:"moderne"},

{word:"mørk (karanlık)", meaning:"lys"},
{word:"lys (aydınlık)", meaning:"mørk"},

{word:"mulig (mümkün)", meaning:"umulig"},
{word:"umulig (imkansız)", meaning:"mulig"},

{word:"nær (yakın)", meaning:"fjern"},
{word:"fjern (uzak)", meaning:"nær"},

{word:"naturlig (doğal)", meaning:"kunstig"},
{word:"kunstig (yapay)", meaning:"naturlig"},

{word:"normal (normal)", meaning:"unormal"},
{word:"unormal (anormal)", meaning:"normal"},

{word:"positiv (pozitif)", meaning:"negativ"},
{word:"negativ (negatif)", meaning:"positiv"},

{word:"rolig (sakin)", meaning:"urolig"},
{word:"urolig (huzursuz)", meaning:"rolig"},

{word:"sød (tatlı)", meaning:"sur"},
{word:"sur (ekşi/sinirli)", meaning:"sød"},

{word:"sund (sağlıklı)", meaning:"usund"},
{word:"usund (sağlıksız)", meaning:"sund"},

{word:"tidlig (erken)", meaning:"sen"},
{word:"sen (geç)", meaning:"tidlig"},

{word:"tør (kuru)", meaning:"våd"},
{word:"våd (ıslak)", meaning:"tør"},

{word:"træt (yorgun)", meaning:"frisk"},
{word:"frisk (dinç)", meaning:"træt"},

{word:"tung (ağır)", meaning:"let"},
{word:"let (hafif)", meaning:"tung"},

{word:"tyk (kalın)", meaning:"tynd"},
{word:"tynd (ince)", meaning:"tyk"},

{word:"venlig (nazik)", meaning:"uhøflig"},
{word:"uhøflig (kaba)", meaning:"venlig"},

{word:"vred (kızgın)", meaning:"rolig"},
{word:"rolig (sakin)", meaning:"vred"},

{word:"sulten (aç)", meaning:"mæt"},
{word:"mæt (tok)", meaning:"sulten"}
];