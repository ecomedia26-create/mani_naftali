import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Shield, 
  User, 
  Phone, 
  FileText,
  Sparkles,
  Bath,
  Hammer,
  Layers,
  Grid2x2
} from 'lucide-react';

type ProjectType = 'bathroom' | 'kitchen' | 'design' | 'full' | 'other';

export const CostCalculator = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState<ProjectType>('full');
  const [description, setDescription] = useState('');

  const projectTypes = [
    { id: 'full', label: 'שיפוץ דירה מלא', icon: <Layers size={16} /> },
    { id: 'bathroom', label: 'חדר רחצה קומפלט', icon: <Bath size={16} /> },
    { id: 'kitchen', label: 'תשתיות והכנת מטבח', icon: <Grid2x2 size={16} /> },
    { id: 'design', label: 'גבס ועיצוב גמר', icon: <Hammer size={16} /> },
    { id: 'other', label: 'אחר / משהו אחר', icon: <Sparkles size={16} /> }
  ];

  const getWhatsAppUrl = () => {
    const projectLabels: Record<ProjectType, string> = {
      full: 'שיפוץ דירה מלא',
      bathroom: 'שיפוץ חדר רחצה קומפלט',
      kitchen: 'תשתיות והכנת מטבח',
      design: 'גבס ועיצוב גמר',
      other: 'פרויקט מותאם אישית'
    };

    let text = `היי מני, אני מעוניין לקבל פרטים לגבי פרויקט:\n\n`;
    if (name) text += `👤 שם מלא: ${name}\n`;
    if (phone) text += `📞 טלפון ליצירת קשר: ${phone}\n`;
    text += `🏗️ סוג פרויקט מבוקש: ${projectLabels[projectType]}\n`;
    if (description) text += `📝 תיאור ופרטים נוספים: ${description}\n`;
    
    text += `\nאשמח לתאם פגישת ייעוץ וסיור בנכס ללא התחייבות.`;

    return `https://wa.me/972525211381?text=${encodeURIComponent(text)}`;
  };


  return (
    <section className="py-20 bg-white border-b border-slate-100" id="calculator">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 text-xs sm:text-sm font-extrabold tracking-wider uppercase bg-blue-50 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <Sparkles size={14} className="text-blue-600" />
            תכנון וייעוץ אישי מהיר
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mt-3 mb-4">ספרו לנו קצת על הפרויקט המבוקש</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            מלאו את הפרטים הבאים כדי שנוכל לחזור אליכם במהירות עם הצעה מדויקת, מותאמת אישית וללא שום התחייבות.
          </p>
        </div>

        {/* Form Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-slate-50 border border-slate-200/60 rounded-3xl p-5 sm:p-8 shadow-sm">
          
          {/* Inputs Column (Right Side - 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-right flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Field 1: Name & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="full-name" className="block text-slate-800 font-extrabold text-sm mb-2 flex items-center gap-1.5 justify-start">
                    <User size={15} className="text-blue-600" />
                    <span>שם מלא:</span>
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="למשל: ישראל ישראלי"
                    className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 rounded-xl px-4 py-3 text-sm text-slate-800 text-right outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone-number" className="block text-slate-800 font-extrabold text-sm mb-2 flex items-center gap-1.5 justify-start">
                    <Phone size={15} className="text-blue-600" />
                    <span>טלפון ליצירת קשר:</span>
                  </label>
                  <input
                    id="phone-number"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="למשל: 050-1234567"
                    className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 rounded-xl px-4 py-3 text-sm text-slate-800 text-right outline-none transition-all"
                  />
                </div>
              </div>

              {/* Field 2: Project Type selector */}
              <div>
                <label className="block text-slate-800 font-extrabold text-sm mb-3 flex items-center gap-1.5 justify-start">
                  <FileText size={15} className="text-blue-600" />
                  <span>סוג הפרויקט המבוקש:</span>
                </label>
                <div className="flex flex-wrap gap-2 justify-start">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setProjectType(type.id as ProjectType)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs sm:text-sm font-extrabold transition-all duration-200 ${
                        projectType === type.id
                          ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      <span className={projectType === type.id ? 'text-white' : 'text-blue-600'}>
                        {type.icon}
                      </span>
                      <span>{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Field 3: Project Description Textarea */}
              <div>
                <label htmlFor="project-description" className="block text-slate-800 font-extrabold text-sm mb-2 flex items-center gap-1.5 justify-start">
                  <FileText size={15} className="text-blue-600" />
                  <span>ספרו לנו קצת על הפרויקט (מיקום, רעיונות, מצב קיים):</span>
                </label>
                <textarea
                  id="project-description"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="למשל: מעוניין לשפץ דירת 4 חדרים ברחובות כולל החלפת ריצוף, עבודות גבס בסלון ושיפוץ קומפלט של המקלחת..."
                  className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 rounded-xl px-4 py-3 text-sm text-slate-800 text-right outline-none transition-all resize-none leading-relaxed"
                />
              </div>

            </div>
          </div>

          {/* Value Proposition Column (Left Side - 5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
            
            {/* Background glow decorator */}
            <div className="absolute -top-12 -left-12 w-36 h-36 bg-blue-600/20 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10 text-right space-y-6">
              
              <div className="flex items-center gap-2 pb-4 border-b border-slate-800/80">
                <div className="bg-blue-600/20 p-2 rounded-lg text-blue-400 shrink-0">
                  <Shield size={18} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-slate-100">הבטחת השירות שלנו</h4>
                  <p className="text-[11px] text-slate-400">סטנדרט בניה ללא פשרות</p>
                </div>
              </div>

              {/* Bullet points of premium standards */}
              <div className="space-y-4 text-right">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-blue-400 mt-1 shrink-0" />
                  <div>
                    <span className="block text-sm font-black text-white">ליווי הנדסי ופיקוח אישי</span>
                    <span className="block text-xs text-slate-300 mt-0.5">פיקוח יומיומי של מני נפתלי בכל שלבי השיפוץ בשטח</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-blue-400 mt-1 shrink-0" />
                  <div>
                    <span className="block text-sm font-black text-white">חומרים מובחרים ותקניים בלבד</span>
                    <span className="block text-xs text-slate-300 mt-0.5">שימוש בחומרי איטום, הדבקה ומליטה הטובים ביותר בשוק</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-blue-400 mt-1 shrink-0" />
                  <div>
                    <span className="block text-sm font-black text-white">עמידה קפדנית בלוחות זמנים</span>
                    <span className="block text-xs text-slate-300 mt-0.5">תכנון מדויק ועמידה ביעדים ללא עיכובים מיותרים</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-blue-400 mt-1 shrink-0" />
                  <div>
                    <span className="block text-sm font-black text-white">אחריות מלאה בכתב</span>
                    <span className="block text-xs text-slate-300 mt-0.5">התחייבות למפרט שקוף ואחריות הנדסית מלאה בסיום הפרויקט</span>
                  </div>
                </div>
              </div>

            </div>

            {/* CTA Link to WhatsApp */}
            <div className="mt-8 relative z-10 text-center">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-white font-black text-base py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-md bg-emerald-600 hover:bg-emerald-500 hover:scale-[1.02] active:scale-100 cursor-pointer"
              >
                <MessageCircle size={20} className="fill-white/10" />
                שליחת הפרטים לוואטסאפ של מני
              </a>
              <span className="block text-center text-[10px] text-slate-400 mt-2 font-medium">שולח הודעה מובנית ישירות לוואטסאפ</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
