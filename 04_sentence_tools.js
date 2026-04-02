const title = "Sentence Tools 🔗❓";

const defaultWords = [

/* ===== TEMEL BAĞLAÇLAR ===== */
{word:"og", meaning:"ve – iki kelimeyi veya cümleyi birbirine bağlamak için kullanılır"},
{word:"eller", meaning:"veya – alternatif seçenek sunar"},
{word:"også", meaning:"ayrıca – ek bilgi verir"},
{word:"både ... og", meaning:"hem ... hem de – iki şeyi birlikte vurgular"},
{word:"hverken ... eller", meaning:"ne ... ne de – iki şeyi de reddeder"},

/* ===== ZITLIK ===== */
{word:"men", meaning:"ama – iki zıt fikri bağlar"},
{word:"dog", meaning:"ancak – daha resmi 'ama'"},
{word:"alligevel", meaning:"yine de – beklenenin tersine durum"},
{word:"selvom", meaning:"-mesine rağmen – yan cümle başlatır"},
{word:"på trods af", meaning:"-e rağmen – isimle kullanılır"},
{word:"derimod", meaning:"aksine – karşılaştırmalı zıtlık"},
{word:"på den anden side", meaning:"öte yandan – alternatif bakış açısı"},

/* ===== SEBEP - SONUÇ ===== */
{word:"fordi", meaning:"çünkü – sebep belirtir"},
{word:"da", meaning:"çünkü – bilinen sebep (genelde yazı dili)"},
{word:"for", meaning:"çünkü – konuşma dilinde kullanılır"},
{word:"derfor", meaning:"bu yüzden – sonuç bildirir"},
{word:"så", meaning:"bu yüzden – konuşma dili sonucu"},
{word:"dermed", meaning:"böylece – sonuç etkisi"},
{word:"på grund af", meaning:"-den dolayı – sebep belirtir"},
{word:"takket være", meaning:"sayesinde – olumlu sebep"},

/* ===== KOŞUL ===== */
{word:"hvis", meaning:"eğer – koşul cümlesi kurar"},
{word:"medmindre", meaning:"-medikçe – negatif koşul"},
{word:"ellers", meaning:"aksi takdirde – alternatif sonuç"},
{word:"i tilfælde af", meaning:"durumunda – resmi kullanım"},

/* ===== ZAMAN ===== */
{word:"når", meaning:"-dığı zaman – genel ve tekrar eden durumlar"},
{word:"da", meaning:"-dığı zaman – geçmişte bir kere olmuş olay"},
{word:"mens", meaning:"iken – aynı anda olan iki eylem"},
{word:"før", meaning:"önce – bir olaydan önce"},
{word:"efter", meaning:"sonra – bir olaydan sonra"},
{word:"inden", meaning:"-meden önce"},
{word:"siden", meaning:"-den beri"},
{word:"så snart", meaning:"olur olmaz – hemen ardından"},
{word:"derefter", meaning:"sonrasında"},
{word:"senere", meaning:"daha sonra"},
{word:"til sidst", meaning:"en sonunda"},
{word:"først", meaning:"ilk olarak"},
{word:"endelig", meaning:"sonunda"},

/* ===== AÇIKLAMA / EKLEME ===== */
{word:"desuden", meaning:"ayrıca – resmi ekleme"},
{word:"udover", meaning:"bunun dışında"},
{word:"endvidere", meaning:"ayrıca – çok resmi"},
{word:"ligeledes", meaning:"aynı şekilde"},
{word:"for eksempel", meaning:"örneğin"},
{word:"især", meaning:"özellikle"},
{word:"generelt", meaning:"genel olarak"},

/* ===== AÇIKLAMA / YENİDEN İFADE ===== */
{word:"altså", meaning:"yani – açıklama yapar"},
{word:"det vil sige", meaning:"yani – daha resmi"},
{word:"med andre ord", meaning:"başka bir deyişle"},
{word:"kort sagt", meaning:"kısaca"},
{word:"faktisk", meaning:"aslında"},

/* ===== HV SORU KELİMELERİ ===== */
{word:"hvad", meaning:"ne – bir şeyin ne olduğunu sormak için"},
{word:"hvem", meaning:"kim – kişi sormak için"},
{word:"hvor", meaning:"nerede – yer sormak için"},
{word:"hvornår", meaning:"ne zaman – zaman sormak için"},
{word:"hvorfor", meaning:"neden – sebep sormak için"},
{word:"hvordan", meaning:"nasıl – yöntem veya durum sormak için"},

/* ===== HV GENİŞLETİLMİŞ ===== */
{word:"hvor mange", meaning:"kaç tane – sayılabilen isimler"},
{word:"hvor meget", meaning:"ne kadar – sayılamayan şeyler"},
{word:"hvor langt", meaning:"ne kadar uzak – mesafe"},
{word:"hvor længe", meaning:"ne kadar süre – zaman uzunluğu"},
{word:"hvor ofte", meaning:"ne sıklıkla – tekrar"},
{word:"hvor gammel", meaning:"kaç yaşında"},

{word:"hvilken", meaning:"hangi – ortak cins tekil isim"},
{word:"hvilket", meaning:"hangi – nötr isim"},
{word:"hvilke", meaning:"hangi – çoğul isimler"}

];