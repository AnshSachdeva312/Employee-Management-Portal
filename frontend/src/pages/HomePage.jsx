import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight, FaRocket, FaPlay, FaSignInAlt, FaUser, FaKey, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';

const HomePage = () => {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovering, setIsHovering] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Color palette
  const colors = {
    primary: '#7c3aed',
    primaryLight: '#8b5cf6',
    primaryDark: '#6d28d9',
    secondary: '#ec4899',
    dark: '#0f172a',
    darker: '#020617',
    light: '#f8fafc',
    white: '#ffffff',
    accent: '#0ea5e9',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    slate: '#64748b'
  };

  // Users data
  const users = [
        { name: "Ansh Sachdeva", email: "sachdeva@example.com", password: "password123", role: 0, phone: 1234567890, image: "" },
        { name: "Jane Smith", email: "janesmith@example.com", password: "securepass", role: 1, phone: 1234567891, image: "" },
        { name: "Robert Johnson", email: "robert@example.com", password: "password456", role: 0, phone: 1234567892, image: "" },
        { name: "Emily Davis", email: "emily@example.com", password: "password789", role: 0, phone: 1234567893, image: "" },
        { name: "Michael Brown", email: "michael@example.com", password: "michaelpass", role: 0, phone: 1234567894, image: "" },
        { name: "Sarah Wilson", email: "sarah@example.com", password: "sarahpass", role: 0, phone: 1234567895, image: "" },
        { name: "David Lee", email: "david@example.com", password: "davidpass", role: 1, phone: 1234567896, image: "" },
        { name: "Sophia Martinez", email: "sophia@example.com", password: "sophiapass", role: 1, phone: 1234567897, image: "" },
        { name: "James Anderson", email: "james@example.com", password: "jamespass", role: 1, phone: 1234567898, image: "" },
        { name: "Olivia Thomas", email: "olivia@example.com", password: "oliviapass", role: 0, phone: 1234567899, image: "" }
    ];

  // Features data
  const features = [
    { 
      title: "Smart Payroll", 
      icon: "💰", 
      color: colors.success,
      description: "Automated payroll processing with tax compliance and direct deposit",
      extendedDesc: "Our payroll system handles all calculations automatically, ensuring compliance with local tax laws while providing employees with multiple payment options."
    },
    { 
      title: "Announcements Hub", 
      icon: "📢", 
      color: colors.accent,
      description: "Centralized communication platform for company-wide updates",
      extendedDesc: "Publish, schedule, and track engagement with important announcements across your organization with our intuitive hub."
    },
    { 
      title: "Meeting Orchestrator", 
      icon: "📅", 
      color: colors.primaryLight,
      description: "Intelligent scheduling with calendar integration",
      extendedDesc: "AI-powered scheduling finds optimal meeting times across timezones with automatic calendar sync and reminders."
    },
    { 
      title: "Approval Workflows", 
      icon: "✅", 
      color: colors.warning,
      description: "Customizable approval chains for HR processes",
      extendedDesc: "Design multi-level approval workflows for notices, time-off requests, and other HR processes with our visual workflow builder."
    },
    { 
      title: "Loan Management", 
      icon: "💸", 
      color: colors.secondary,
      description: "End-to-end employee loan processing",
      extendedDesc: "From application to amortization, manage all aspects of employee loans with automated repayment tracking."
    },
    { 
      title: "Task Automation", 
      icon: "🤖", 
      color: colors.danger,
      description: "AI-assisted task delegation and tracking",
      extendedDesc: "Our smart system suggests task assignments based on skills and workload, with real-time progress tracking."
    }
  ];

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  const handleLoginRedirect = () => navigate('/signin');

  // Styles
  const styles = {
    // Global styles
    page: {
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${colors.darker}, ${colors.dark})`,
      color: colors.light,
      fontFamily: "'Inter', sans-serif",
      overflowX: 'hidden'
    },
    
    // Background elements
    backgroundElements: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 0
    },
    backgroundDot: {
      position: 'absolute',
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      backgroundColor: colors.primary,
      boxShadow: `0 0 15px 3px ${colors.primary}`,
      opacity: 0.3,
      animation: 'float 5s infinite ease-in-out'
    },
    
    // Header
    header: {
      position: 'fixed',
      width: '100%',
      zIndex: 50,
      transition: 'all 0.3s ease',
      padding: scrolled ? '12px 0' : '20px 0',
      background: scrolled ? `${colors.dark}90` : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none'
    },
    headerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '24px',
      fontWeight: 700,
      background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    logoIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '12px',
      color: colors.white,
      fontWeight: 'bold',
      fontSize: '20px'
    },
    nav: {
      display: 'flex',
      gap: '32px',
      alignItems: 'center'
    },
    navLink: {
      color: colors.slate,
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      position: 'relative',
      ':hover': {
        color: colors.white
      }
    },
    navLinkUnderline: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: 0,
      height: '2px',
      backgroundColor: colors.primary,
      transition: 'width 0.3s ease'
    },
    navLinkHover: {
      ':hover': {
        color: colors.white
      },
      ':hover $navLinkUnderline': {
        width: '100%'
      }
    },
    ctaButton: {
      background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
      color: colors.white,
      padding: '12px 24px',
      borderRadius: '9999px',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      boxShadow: `0 4px 15px ${colors.primary}40`,
      ':hover': {
        transform: 'translateY(-2px)',
        boxShadow: `0 6px 20px ${colors.primary}60`
      }
    },
    
    // Hero section
    hero: {
      paddingTop: '160px',
      paddingBottom: '80px',
      paddingLeft: '24px',
      paddingRight: '24px',
      position: 'relative'
    },
    heroContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '48px'
    },
    heroContent: {
      flex: 1,
      maxWidth: '800px',
      textAlign: 'center'
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 800,
      lineHeight: 1.2,
      marginBottom: '24px',
      background: `linear-gradient(to right, ${colors.primary}, ${colors.accent}, ${colors.secondary})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: colors.slate,
      maxWidth: '700px',
      margin: '0 auto 40px',
      lineHeight: 1.6
    },
    heroButtons: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    primaryButton: {
      background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
      color: colors.white,
      padding: '16px 32px',
      borderRadius: '12px',
      fontWeight: 600,
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      boxShadow: `0 4px 20px ${colors.primary}40`,
      ':hover': {
        transform: 'translateY(-3px)',
        boxShadow: `0 8px 25px ${colors.primary}60`
      }
    },
    secondaryButton: {
      background: colors.dark,
      color: colors.light,
      padding: '16px 32px',
      borderRadius: '12px',
      fontWeight: 600,
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      border: `1px solid ${colors.primary}30`,
      ':hover': {
        background: `${colors.primary}10`,
        transform: 'translateY(-3px)'
      }
    },
    heroFeatureCard: {
      width: '100%',
      maxWidth: '400px',
      background: `${colors.dark}80`,
      backdropFilter: 'blur(12px)',
      borderRadius: '20px',
      padding: '32px',
      border: `1px solid ${colors.primary}20`,
      boxShadow: `0 20px 50px rgba(0, 0, 0, 0.3)`,
      transition: 'all 0.5s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    featureIcon: {
      width: '96px',
      height: '96px',
      borderRadius: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '40px',
      marginBottom: '24px',
      background: `linear-gradient(135deg, ${features[activeFeature].color}, ${colors.primaryLight})`,
      boxShadow: `0 10px 30px ${features[activeFeature].color}50`
    },
    featureTitle: {
      fontSize: '24px',
      fontWeight: 700,
      marginBottom: '16px',
      textAlign: 'center'
    },
    featureDescription: {
      color: colors.slate,
      textAlign: 'center',
      marginBottom: '24px',
      lineHeight: 1.6
    },
    featurePagination: {
      display: 'flex',
      gap: '8px'
    },
    paginationDot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: colors.slate,
      opacity: 0.5,
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    activePaginationDot: {
      width: '24px',
      borderRadius: '6px',
      background: colors.primary,
      opacity: 1
    },
    
    // Features section
    featuresSection: {
      padding: '80px 24px',
      position: 'relative',
      overflow: 'hidden'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 800,
      marginBottom: '16px',
      textAlign: 'center',
      background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    sectionSubtitle: {
      fontSize: '1.25rem',
      color: colors.slate,
      maxWidth: '700px',
      margin: '0 auto 48px',
      textAlign: 'center',
      lineHeight: 1.6
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '24px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    featureCard: {
      background: `${colors.dark}80`,
      backdropFilter: 'blur(12px)',
      borderRadius: '16px',
      padding: '32px',
      border: `1px solid ${colors.primary}20`,
      transition: 'all 0.3s ease',
      ':hover': {
        transform: 'translateY(-8px)',
        boxShadow: `0 15px 40px ${colors.primary}20`,
        borderColor: `${colors.primary}40`
      }
    },
    cardIcon: {
      width: '64px',
      height: '64px',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '28px',
      marginBottom: '24px',
      background: `linear-gradient(135deg, var(--feature-color), ${colors.primaryLight})`,
      boxShadow: `0 5px 20px var(--feature-color)30`
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: 700,
      marginBottom: '12px'
    },
    cardDescription: {
      color: colors.slate,
      marginBottom: '16px',
      lineHeight: 1.6
    },
    cardExtendedDesc: {
      fontSize: '14px',
      color: `${colors.slate}80`,
      lineHeight: 1.6
    },
    
    // Test credentials section
    credentialsSection: {
      padding: '80px 24px',
      background: `linear-gradient(135deg, ${colors.darker}, ${colors.dark})`,
      position: 'relative'
    },
    userCard: {
      background: `${colors.dark}80`,
      backdropFilter: 'blur(12px)',
      borderRadius: '16px',
      overflow: 'hidden',
      border: `1px solid ${colors.primary}20`,
      transition: 'all 0.3s ease',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: `0 10px 30px ${colors.primary}20`
      }
    },
    userCardContent: {
      padding: '24px'
    },
    userHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '24px'
    },
    userAvatar: {
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '16px',
      fontSize: '20px',
      background: `linear-gradient(135deg, var(--role-color), ${colors.primaryLight})`
    },
    userRole: {
      display: 'inline-block',
      padding: '4px 12px',
      borderRadius: '9999px',
      fontSize: '12px',
      fontWeight: 600,
      background: 'var(--role-bg)',
      color: 'var(--role-color)',
      border: '1px solid var(--role-border)'
    },
    userDetails: {
      marginBottom: '24px'
    },
    userDetailItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '12px',
      color: colors.slate
    },
    userDetailIcon: {
      marginRight: '12px',
      color: colors.primary
    },
    loginButton: {
      width: '100%',
      padding: '12px',
      borderRadius: '8px',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    
    // CTA section
    ctaSection: {
      padding: '80px 24px',
      position: 'relative',
      overflow: 'hidden',
      background: `linear-gradient(135deg, ${colors.primaryDark}20, ${colors.accent}20)`
    },
    ctaTitle: {
      fontSize: '2.5rem',
      fontWeight: 800,
      marginBottom: '16px',
      textAlign: 'center'
    },
    ctaSubtitle: {
      fontSize: '1.25rem',
      color: colors.slate,
      maxWidth: '700px',
      margin: '0 auto 40px',
      textAlign: 'center',
      lineHeight: 1.6
    },
    ctaButton: {
      background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
      color: colors.white,
      padding: '20px 40px',
      borderRadius: '12px',
      fontWeight: 600,
      fontSize: '1.125rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      boxShadow: `0 4px 30px ${colors.primary}40`,
      margin: '0 auto',
      ':hover': {
        transform: 'translateY(-3px)',
        boxShadow: `0 8px 40px ${colors.primary}60`
      }
    },
    
    // Footer
    footer: {
      background: `${colors.dark}80`,
      backdropFilter: 'blur(12px)',
      borderTop: `1px solid ${colors.primary}20`,
      padding: '64px 24px 32px'
    },
    footerContainer: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    footerMain: {
      display: 'flex',
      flexDirection: 'column',
      gap: '48px',
      marginBottom: '48px'
    },
    footerBrand: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    footerLogo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '24px',
      fontWeight: 700,
      background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    footerLogoIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.white,
      fontWeight: 'bold',
      fontSize: '20px'
    },
    footerDescription: {
      color: colors.slate,
      maxWidth: '400px'
    },
    footerLinks: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '48px'
    },
    linkGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    linkGroupTitle: {
      color: colors.light,
      fontWeight: 600,
      fontSize: '18px',
      marginBottom: '8px'
    },
    linkItem: {
      color: colors.slate,
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      ':hover': {
        color: colors.primary
      }
    },
    footerBottom: {
      borderTop: `1px solid ${colors.primary}20`,
      paddingTop: '32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    copyright: {
      color: colors.slate,
      textAlign: 'center'
    },
    legalLinks: {
      display: 'flex',
      gap: '24px'
    },
    legalLink: {
      color: colors.slate,
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      ':hover': {
        color: colors.primary
      }
    },
    credits: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      color: colors.slate,
      fontSize: '14px',
      marginTop: '32px'
    },
    heartIcon: {
      color: colors.danger
    },
    
    // Animations
    floatAnimation: {
      animation: 'float 6s ease-in-out infinite'
    },
    fadeIn: {
      animation: 'fadeIn 0.5s ease-out forwards'
    }
  };

  return (
    <div style={styles.page}>
      {/* Animated background elements */}
      <div style={styles.backgroundElements}>
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            style={{
              ...styles.backgroundDot,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>N</div>
            <span>NexusHR</span>
          </div>
          
          <nav style={styles.nav}>
            {['Features', 'Solutions', 'Pricing', 'Resources'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                style={styles.navLink}
              >
                {item}
                <span style={styles.navLinkUnderline}></span>
              </a>
            ))}
            
            <button 
              onClick={handleLoginRedirect}
              style={styles.ctaButton}
            >
              <span>Get Started</span>
              <FaChevronRight />
            </button>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <section style={styles.hero}>
        <div style={styles.heroContainer}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              Modern HR Solutions for the Digital Workplace
            </h1>
            <p style={styles.heroSubtitle}>
              Streamline your HR operations with our all-in-one platform designed to empower your workforce and simplify people management.
            </p>
            
            <div style={styles.heroButtons}>
              <button 
                onClick={handleLoginRedirect}
                style={styles.primaryButton}
              >
                <FaRocket />
                <span>Launch Dashboard</span>
              </button>
              
              <button style={styles.secondaryButton}>
                <FaPlay />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
          
          <div style={styles.heroFeatureCard}>
            <div style={{
              ...styles.featureIcon,
              background: `linear-gradient(135deg, ${features[activeFeature].color}, ${colors.primaryLight})`
            }}>
              {features[activeFeature].icon}
            </div>
            <h3 style={styles.featureTitle}>{features[activeFeature].title}</h3>
            <p style={styles.featureDescription}>{features[activeFeature].description}</p>
            
            <div style={styles.featurePagination}>
              {features.map((_, index) => (
                <div 
                  key={index}
                  style={{
                    ...styles.paginationDot,
                    ...(index === activeFeature ? styles.activePaginationDot : {})
                  }}
                  onClick={() => setActiveFeature(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section style={styles.featuresSection}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={styles.sectionTitle}>Powerful Features for Modern HR Teams</h2>
          <p style={styles.sectionSubtitle}>
            Designed to streamline your HR operations and enhance employee experience
          </p>
          
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div 
                key={index}
                style={{
                  ...styles.featureCard,
                  '--feature-color': feature.color
                }}
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <div style={{
                  ...styles.cardIcon,
                  transform: isHovering === index ? 'rotate(15deg) scale(1.1)' : 'rotate(0deg) scale(1)'
                }}>
                  {feature.icon}
                </div>
                <h3 style={styles.cardTitle}>{feature.title}</h3>
                <p style={styles.cardDescription}>{feature.description}</p>
                <p style={styles.cardExtendedDesc}>{feature.extendedDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test credentials section */}
      <section style={styles.credentialsSection}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={styles.sectionTitle}>Try Our Demo Accounts</h2>
          <p style={styles.sectionSubtitle}>
            Explore the platform with these pre-configured user credentials
          </p>
          
          <div style={styles.featuresGrid}>
            {users.map((user, index) => (
              <div 
                key={index}
                style={{
                  ...styles.userCard,
                  '--role-color': user.role === 1 ? colors.secondary : colors.primary,
                  '--role-bg': user.role === 1 ? `${colors.secondary}20` : `${colors.primary}20`,
                  '--role-border': user.role === 1 ? `${colors.secondary}50` : `${colors.primary}50`
                }}
              >
                <div style={styles.userCardContent}>
                  <div style={styles.userHeader}>
                    <div style={{
                      ...styles.userAvatar,
                      background: `linear-gradient(135deg, var(--role-color), ${colors.primaryLight})`
                    }}>
                      <FaUser />
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 600, marginBottom: '4px' }}>{user.name}</h3>
                      <span style={styles.userRole}>
                        {user.role === 1 ? 'Administrator' : 'Employee'}
                      </span>
                    </div>
                  </div>
                  
                  <div style={styles.userDetails}>
                    <div style={styles.userDetailItem}>
                      <FaEnvelope style={styles.userDetailIcon} />
                      <span>{user.email}</span>
                    </div>
                    <div style={styles.userDetailItem}>
                      <FaKey style={styles.userDetailIcon} />
                      <span>{user.password}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleLoginRedirect}
                    style={{
                      ...styles.loginButton,
                      background: user.role === 1 ? colors.secondary : colors.primary,
                      color: colors.white,
                      ':hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: `0 4px 15px ${user.role === 1 ? colors.secondary : colors.primary}40`
                      }
                    }}
                  >
                    <FaSignInAlt />
                    <span>Login as {user.name.split(' ')[0]}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section style={styles.ctaSection}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={styles.ctaTitle}>Ready to Transform Your HR Operations?</h2>
          <p style={styles.ctaSubtitle}>
            Join hundreds of companies who've revolutionized their HR management with NexusHR
          </p>
          
          <button 
            onClick={handleLoginRedirect}
            style={styles.ctaButton}
          >
            <span>Get Started Now</span>
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerMain}>
            <div style={styles.footerBrand}>
              <div style={styles.footerLogo}>
                <div style={styles.footerLogoIcon}>N</div>
                <span>NexusHR</span>
              </div>
              <p style={styles.footerDescription}>
                The modern HR platform for the digital workplace
              </p>
            </div>
            
            <div style={styles.footerLinks}>
              {['Product', 'Company', 'Resources'].map((category) => (
                <div key={category} style={styles.linkGroup}>
                  <h4 style={styles.linkGroupTitle}>{category}</h4>
                  {['Features', 'Solutions', 'Pricing'].map((item) => (
                    <a 
                      key={item}
                      href="#"
                      style={styles.linkItem}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <div style={styles.footerBottom}>
            <p style={styles.copyright}>
              © {new Date().getFullYear()} NexusHR. All rights reserved.
            </p>
            
            <div style={styles.legalLinks}>
              {['Privacy Policy', 'Terms of Service', 'Contact Us'].map((item) => (
                <a 
                  key={item}
                  href="#"
                  style={styles.legalLink}
                >
                  {item}
                </a>
              ))}
            </div>
            
            <div style={styles.credits}>
              <span>Made with</span>
              <FaHeart style={styles.heartIcon} />
              <span>by Ansh Sachdeva</span>
              <FaCode />
            </div>
          </div>
        </div>
      </footer>

      {/* Global animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default HomePage;