"use client"

import React, { useState, useRef } from "react"
import { motion, useReducedMotion, AnimatePresence, useInView } from "framer-motion"
import { CheckCircle, Loader2, AlertCircle } from "lucide-react"
import { Footer } from "@/components/footer"
import { AnimatedBackgroundLayer } from "@/components/motion/animated-background-layer"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

interface FormData {
  fullName: string
  email: string
  phone: string
  projectGoal: string
  whatYouNeed: string[]
  budgetRange: string
  confirmation: boolean
  preferredDay: string
  preferredTime: string
  additionalNotes: string
}

interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
  projectGoal?: string
  whatYouNeed?: string
  budgetRange?: string
  confirmation?: string
  preferredDay?: string
  preferredTime?: string
}

// Form group header with scroll-triggered animation
function FormGroupHeader({
  title,
  step
}: {
  title: string
  step: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-3 mb-6"
      initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
      animate={
        shouldReduceMotion
          ? {}
          : isInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: -20 }
      }
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-medium">
        {step}
      </span>
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
    </motion.div>
  )
}

// Validation message with animation
function ValidationMessage({ message }: { message: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: -8, height: 0 }}
      animate={{ opacity: 1, y: 0, height: "auto" }}
      exit={{ opacity: 0, y: -8, height: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="mt-1 flex items-center gap-1 text-sm text-destructive"
    >
      <AlertCircle size={14} />
      {message}
    </motion.p>
  )
}

// Success state with animated check
function SuccessState({ t }: { t: ReturnType<typeof useLanguage>["t"] }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>

      <main className="relative pt-32 pb-20 min-h-screen flex items-center">
        {/* Animated background for header */}
        <div className="absolute inset-x-0 top-0 h-[400px] overflow-hidden">
          <AnimatedBackgroundLayer variant="minimal" />
        </div>

        <div className="mx-auto max-w-xl px-6 text-center relative z-10">
          {/* Animated check icon */}
          <motion.div
            initial={shouldReduceMotion ? {} : { scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.1,
            }}
            className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <motion.div
              initial={shouldReduceMotion ? {} : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <CheckCircle size={40} className="text-primary" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            {t.form.successTitle}
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {t.form.successMessage}
          </motion.p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function StartProjectPage() {
  const { t } = useLanguage()
  const shouldReduceMotion = useReducedMotion()

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    projectGoal: "",
    whatYouNeed: [],
    budgetRange: "",
    confirmation: false,
    preferredDay: "",
    preferredTime: "",
    additionalNotes: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedGroup, setFocusedGroup] = useState<number | null>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = t.form.errors.required
    }

    if (!formData.email.trim()) {
      newErrors.email = t.form.errors.required
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.form.errors.email
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.form.errors.required
    }

    if (!formData.projectGoal) {
      newErrors.projectGoal = t.form.errors.required
    }

    if (formData.whatYouNeed.length === 0) {
      newErrors.whatYouNeed = t.form.errors.required
    }

    if (!formData.budgetRange) {
      newErrors.budgetRange = t.form.errors.required
    }

    if (!formData.confirmation) {
      newErrors.confirmation = t.form.errors.confirmation
    }

    if (!formData.preferredDay) {
      newErrors.preferredDay = t.form.errors.required
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = t.form.errors.required
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleNeedChange = (need: string) => {
    setFormData((prev) => ({
      ...prev,
      whatYouNeed: prev.whatYouNeed.includes(need)
        ? prev.whatYouNeed.filter((n) => n !== need)
        : [...prev.whatYouNeed, need],
    }))
  }

  if (isSubmitted) {
    return <SuccessState t={t} />
  }

  return (
    <>

      <main className="relative pt-32 pb-20">
        {/* Animated background for header */}
        <div className="absolute inset-x-0 top-0 h-[400px] overflow-hidden">
          <AnimatedBackgroundLayer variant="minimal" />
        </div>
        <div className="mx-auto max-w-2xl px-6">
          {/* Header */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-12"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.form.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.form.subtitle}
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-10"
          >
            {/* Group 1: Contact Info */}
            <motion.div
              className={cn(
                "relative p-6 -m-6 rounded-2xl transition-colors duration-300",
                focusedGroup === 1 && "bg-card/50"
              )}
              onFocus={() => setFocusedGroup(1)}
            >
              <FormGroupHeader title={t.form.contactInfo || "Contact Information"} step={1} />

              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                    {t.form.fullName} *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={cn(
                      "w-full px-4 py-3 bg-card border rounded-lg text-foreground placeholder:text-muted-foreground/50",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300",
                      errors.fullName ? "border-destructive" : "border-border/50"
                    )}
                  />
                  <AnimatePresence>
                    {errors.fullName && <ValidationMessage message={errors.fullName} />}
                  </AnimatePresence>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t.form.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={cn(
                      "w-full px-4 py-3 bg-card border rounded-lg text-foreground placeholder:text-muted-foreground/50",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300",
                      errors.email ? "border-destructive" : "border-border/50"
                    )}
                  />
                  <AnimatePresence>
                    {errors.email && <ValidationMessage message={errors.email} />}
                  </AnimatePresence>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    {t.form.phone} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={cn(
                      "w-full px-4 py-3 bg-card border rounded-lg text-foreground placeholder:text-muted-foreground/50",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300",
                      errors.phone ? "border-destructive" : "border-border/50"
                    )}
                  />
                  <AnimatePresence>
                    {errors.phone && <ValidationMessage message={errors.phone} />}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="border-t border-border/30" />

            {/* Group 2: Project Needs */}
            <motion.div
              className={cn(
                "relative p-6 -m-6 rounded-2xl transition-colors duration-300",
                focusedGroup === 2 && "bg-card/50"
              )}
              onFocus={() => setFocusedGroup(2)}
            >
              <FormGroupHeader title={t.form.projectNeeds || "Project Needs"} step={2} />

              <div className="space-y-6">
                {/* Project Goal */}
                <div>
                  <label htmlFor="projectGoal" className="block text-sm font-medium text-foreground mb-2">
                    {t.form.projectGoal} *
                  </label>
                  <select
                    id="projectGoal"
                    value={formData.projectGoal}
                    onChange={(e) => setFormData({ ...formData, projectGoal: e.target.value })}
                    className={cn(
                      "w-full px-4 py-3 bg-card border rounded-lg text-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 appearance-none",
                      errors.projectGoal ? "border-destructive" : "border-border/50",
                      !formData.projectGoal && "text-muted-foreground/50"
                    )}
                  >
                    <option value="">{t.form.projectGoalPlaceholder}</option>
                    {t.form.projectGoalOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <AnimatePresence>
                    {errors.projectGoal && <ValidationMessage message={errors.projectGoal} />}
                  </AnimatePresence>
                </div>

                {/* What You Need */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    {t.form.whatYouNeed} *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {t.form.needOptions.map((need, index) => (
                      <motion.label
                        key={need}
                        initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={cn(
                          "flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-300",
                          formData.whatYouNeed.includes(need)
                            ? "bg-primary/10 border-primary/30"
                            : "bg-card border-border/50 hover:border-border"
                        )}
                      >
                        <input
                          type="checkbox"
                          checked={formData.whatYouNeed.includes(need)}
                          onChange={() => handleNeedChange(need)}
                          className="sr-only"
                        />
                        <motion.div
                          className={cn(
                            "w-5 h-5 rounded border flex items-center justify-center transition-all duration-300",
                            formData.whatYouNeed.includes(need)
                              ? "bg-primary border-primary"
                              : "border-border"
                          )}
                          animate={formData.whatYouNeed.includes(need) ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ duration: 0.2 }}
                        >
                          {formData.whatYouNeed.includes(need) && (
                            <CheckCircle size={14} className="text-primary-foreground" />
                          )}
                        </motion.div>
                        <span className="text-sm text-foreground">{need}</span>
                      </motion.label>
                    ))}
                  </div>
                  <AnimatePresence>
                    {errors.whatYouNeed && <ValidationMessage message={errors.whatYouNeed} />}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="border-t border-border/30" />

            {/* Group 3: Budget + Confirmation */}
            <motion.div
              className={cn(
                "relative p-6 -m-6 rounded-2xl transition-colors duration-300",
                focusedGroup === 3 && "bg-card/50"
              )}
              onFocus={() => setFocusedGroup(3)}
            >
              <FormGroupHeader title={t.form.budgetInfo || "Budget & Terms"} step={3} />

              <div className="space-y-6">
                {/* Budget Range */}
                <div>
                  <label htmlFor="budgetRange" className="block text-sm font-medium text-foreground mb-2">
                    {t.form.budgetRange} *
                  </label>
                  <select
                    id="budgetRange"
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className={cn(
                      "w-full px-4 py-3 bg-card border rounded-lg text-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 appearance-none",
                      errors.budgetRange ? "border-destructive" : "border-border/50",
                      !formData.budgetRange && "text-muted-foreground/50"
                    )}
                  >
                    <option value="">{t.form.budgetPlaceholder}</option>
                    {t.form.budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <AnimatePresence>
                    {errors.budgetRange && <ValidationMessage message={errors.budgetRange} />}
                  </AnimatePresence>
                </div>

                {/* Confirmation Checkbox */}
                <div>
                  <motion.label
                    className={cn(
                      "flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-300",
                      formData.confirmation
                        ? "bg-primary/10 border-primary/30"
                        : "bg-card border-border/50",
                      errors.confirmation && "border-destructive"
                    )}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <input
                      type="checkbox"
                      checked={formData.confirmation}
                      onChange={(e) => setFormData({ ...formData, confirmation: e.target.checked })}
                      className="sr-only"
                    />
                    <motion.div
                      className={cn(
                        "mt-0.5 w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-all duration-300",
                        formData.confirmation ? "bg-primary border-primary" : "border-border"
                      )}
                      animate={formData.confirmation ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.2 }}
                    >
                      {formData.confirmation && (
                        <CheckCircle size={14} className="text-primary-foreground" />
                      )}
                    </motion.div>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {t.form.confirmationCheckbox}
                    </span>
                  </motion.label>
                  <AnimatePresence>
                    {errors.confirmation && <ValidationMessage message={errors.confirmation} />}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="border-t border-border/30" />

            {/* Submit Button with magnetic effect */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl transition-all duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-[0_0_30px_oklch(0.45_0.12_155_/_0.4)]"
              )}
              whileHover={shouldReduceMotion || isSubmitting ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion || isSubmitting ? {} : { scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>...</span>
                </>
              ) : (
                t.form.submit
              )}
            </motion.button>
          </motion.form>
        </div>
      </main>
      <Footer />
    </>
  )
}
