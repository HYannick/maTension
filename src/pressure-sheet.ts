export const bpStatusConfig = {
  bloodPressureRanges: [
    {
      id: 'hypotension_severe',
      systolic: { min: 0, max: 70 },
      diastolic: { min: 0, max: 40 },
      status: 'urgence',
      priority: 1,
      color: '#EF4444',
      icon: '⚠️',
      message: 'Tension très basse - Appelez un médecin',
      action: 'Immediate medical attention'
    },
    {
      id: 'hypotension',
      systolic: { min: 80, max: 90 },
      diastolic: { min: 50, max: 60 },
      status: 'trop_basse',
      priority: 2,
      color: '#F97316',
      icon: '⬇️',
      message: 'Tension basse - Surveillez les symptômes',
      action: 'Check for dizziness, fatigue'
    },
    {
      id: 'low_normal',
      systolic: { min: 90, max: 100 },
      diastolic: { min: 60, max: 70 },
      status: 'limite_basse',
      priority: 3,
      color: '#EAB308',
      icon: '⚡',
      message: 'Tension un peu basse - Hydratez-vous',
      action: 'Monitor, ensure hydration'
    },
    {
      id: 'optimal',
      systolic: { min: 100, max: 120 },
      diastolic: { min: 70, max: 80 },
      status: 'excellente',
      priority: 5,
      color: '#22C55E',
      icon: '✅',
      message: 'Excellente tension',
      action: 'Perfect range'
    },
    {
      id: 'normal',
      systolic: { min: 120, max: 130 },
      diastolic: { min: 80, max: 80 },
      status: 'bonne',
      priority: 5,
      color: '#22C55E',
      icon: '✅',
      message: 'Bonne tension',
      action: 'Good range'
    },
    {
      id: 'normal_high',
      systolic: { min: 130, max: 140 },
      diastolic: { min: 80, max: 90 },
      status: 'correcte',
      priority: 4,
      color: '#22C55E',
      icon: '✅',
      message: 'Tension correcte',
      action: 'Still good'
    },
    {
      id: 'prehypertension',
      systolic: { min: 140, max: 150 },
      diastolic: { min: 90, max: 90 },
      status: 'attention',
      priority: 3,
      color: '#EAB308',
      icon: '⚡',
      message: 'À surveiller - Évitez le sel',
      action: 'Lifestyle changes'
    },
    {
      id: 'hypertension_stage1',
      systolic: { min: 150, max: 160 },
      diastolic: { min: 90, max: 100 },
      status: 'elevee',
      priority: 2,
      color: '#F97316',
      icon: '⬆️',
      message: 'Tension élevée - Parlez au médecin',
      action: 'Medical consultation advised'
    },
    {
      id: 'hypertension_stage2',
      systolic: { min: 160, max: 180 },
      diastolic: { min: 100, max: 110 },
      status: 'tres_elevee',
      priority: 1,
      color: '#EF4444',
      icon: '⚠️',
      message: 'Tension très élevée - Consultez rapidement',
      action: 'Urgent medical consultation'
    },
    {
      id: 'hypertensive_crisis',
      systolic: { min: 180, max: 500 },
      diastolic: { min: 110, max: 300 },
      status: 'urgence',
      priority: 1,
      color: '#EF4444',
      icon: '🚨',
      message: 'Urgence - Appelez le 15 immédiatement',
      action: 'Emergency medical attention'
    }
  ],

  pulseRanges: [
    {
      id: 'bradycardia_severe',
      min: 0,
      max: 39,
      status: 'trop_lent',
      priority: 1,
      color: '#EF4444',
      icon: '⚠️',
      message: 'Pouls très lent - Consultez',
      context: 'Possible medication effect or heart block'
    },
    {
      id: 'bradycardia',
      min: 40,
      max: 50,
      status: 'lent',
      priority: 3,
      color: '#EAB308',
      icon: '⬇️',
      message: 'Pouls lent - Normal si médicaments',
      context: 'Common with beta-blockers'
    },
    {
      id: 'normal_low',
      min: 50,
      max: 60,
      status: 'bon',
      priority: 4,
      color: '#22C55E',
      icon: '✅',
      message: 'Pouls calme',
      context: 'Good if no symptoms'
    },
    {
      id: 'normal',
      min: 60,
      max: 80,
      status: 'excellent',
      priority: 5,
      color: '#22C55E',
      icon: '✅',
      message: 'Pouls excellent',
      context: 'Ideal range'
    },
    {
      id: 'normal_high',
      min: 80,
      max: 90,
      status: 'bon',
      priority: 4,
      color: '#22C55E',
      icon: '✅',
      message: 'Pouls normal',
      context: 'Still good'
    },
    {
      id: 'elevated',
      min: 90,
      max: 100,
      status: 'attention',
      priority: 3,
      color: '#EAB308',
      icon: '⬆️',
      message: 'Pouls un peu rapide',
      context: 'Check for stress, caffeine'
    },
    {
      id: 'tachycardia',
      min: 100,
      max: 120,
      status: 'rapide',
      priority: 2,
      color: '#F97316',
      icon: '⚠️',
      message: 'Pouls rapide - Reposez-vous',
      context: 'May need medical check'
    },
    {
      id: 'tachycardia_severe',
      min: 120,
      max: 250,
      status: 'tres_rapide',
      priority: 1,
      color: '#EF4444',
      icon: '🚨',
      message: 'Pouls très rapide - Consultez',
      context: 'Medical attention needed'
    }
  ],

  // Helper function to find BP range
  findBPRange(systolic:number, diastolic:number) {
    return this.bloodPressureRanges.find(range =>
      systolic >= range.systolic.min && systolic <= range.systolic.max &&
      diastolic >= range.diastolic.min && diastolic <= range.diastolic.max
    )
  },

  // Helper function to find pulse range
  findPulseRange(pulse:number) {
    return this.pulseRanges.find(range =>
      pulse >= range.min && pulse <= range.max
    )
  },

  // Combined status evaluation
  evaluateReading(systolic:number, diastolic:number, pulse:number) {
    const bpRange = this.findBPRange(systolic, diastolic)
    const pulseRange = this.findPulseRange(pulse)

    if (!bpRange || !pulseRange) {
      return {
        status: 'error',
        message: 'Valeurs invalides',
        color: '#6B7280',
        icon: '❓'
      }
    }

    // Check special cases
    const specialCase = this.checkSpecialCases(systolic, diastolic)

    // Determine overall priority (lowest number wins)
    const overallPriority = Math.min(bpRange.priority, pulseRange.priority)
    const primaryRange = bpRange.priority <= pulseRange.priority ? bpRange : pulseRange

    return {
      status: primaryRange.status,
      message: primaryRange.message,
      color: primaryRange.color,
      icon: primaryRange.icon,
      priority: overallPriority,
      details: {
        bloodPressure: bpRange,
        pulse: pulseRange,
        specialCase
      }
    }
  },

  // Special cases checker
  checkSpecialCases(systolic:number, diastolic:number) {
    const cases = []

    // Isolated systolic hypertension
    if (systolic >= 15 && diastolic < 9) {
      cases.push({
        type: 'isolated_systolic',
        message: 'Hypertension systolique isolée',
        note: 'Fréquent chez les personnes âgées'
      })
    }

    // Wide pulse pressure
    if (systolic - diastolic > 8) {
      cases.push({
        type: 'wide_pulse_pressure',
        message: 'Écart important entre les valeurs',
        note: 'À mentionner au médecin'
      })
    }

    return cases.length > 0 ? cases : null
  },

  metadata: {
    targetAge: '60+',
    units: {
      bloodPressure: 'cmHg',
      pulse: 'bpm'
    },
    locale: 'fr-FR',
    emergencyNumber: '15',
    lastUpdated: '2025-06-27'
  }
}