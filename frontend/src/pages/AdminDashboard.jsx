// import { Link, useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import {
//   CalendarIcon,
//   PhotoIcon,
//   ServerIcon,
//   UsersIcon,
//   EyeIcon,
//   TrashIcon,
//   ExclamationTriangleIcon,
//   ShieldCheckIcon,
//   ArrowRightOnRectangleIcon,
// } from '@heroicons/react/24/outline';
// import { signOut, getAdminOverview, getAdminEvents, getAdminRecentUploads, updateEventStatus, deleteAdminEvent } from '../services/api';
// import { signOut } from '../services/api';

// export default function AdminDashboard() {
//   const navigate = useNavigate();
//   const [stats, setStats] = useState({
//     totalEvents: 0,
//     totalUsers: 0,
//     totalPhotos: 0,
//     totalStorageGb: 0,
//   });
//   const [events, setEvents] = useState([]);
//   const [recentUploads, setRecentUploads] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [deletingEventId, setDeletingEventId] = useState(null);

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const fetchDashboardData = async () => {
//     try {
//       setLoading(true);
//       setError('');

//       // Fetch all data in parallel
//       const [overviewData, eventsData, uploadsData] = await Promise.all([
//         getAdminOverview(),
//         getAdminEvents(1, 10),
//         getAdminRecentUploads(1, 10)
//       ]);

//       setStats({
//         totalEvents: overviewData.total_events || 0,
//         totalUsers: overviewData.total_users || 0,
//         totalPhotos: overviewData.total_photos || 0,
//         totalStorageGb: overviewData.total_storage_gb || 0,
//       });

//       setEvents(eventsData.events || []);
//       setRecentUploads(uploadsData.uploads || []);
//     } catch (err) {
//       setError(err.message || 'Failed to load dashboard data. Please try again.');
//       console.error('Error fetching dashboard data:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDisableEvent = async (eventId) => {
//     const event = events.find(e => e.id === eventId);
//     if (!event) return;

//     const action = event.is_active ? 'disable' : 'enable';
//     if (window.confirm(Are you sure you want to ${action} this event?)) {
//       try {
//         await updateEventStatus(eventId, { is_active: !event.is_active });
//         // Refresh events list
//         await fetchDashboardData();
//       } catch (err) {
//         alert(err.message || 'Failed to update event status. Please try again.');
//         console.error('Error updating event status:', err);
//       }
//     }
//   };

//   const handleDeleteEvent = async (eventId) => {
//     if (window.confirm('This will permanently delete the event and all its photos. This action cannot be undone. Continue?')) {
//       try {
//         setDeletingEventId(eventId);
//         await deleteAdminEvent(eventId);
//         // Remove deleted event from local state
//         setEvents(events.filter(e => e.id !== eventId));
//       } catch (err) {
//         alert(err.message || 'Failed to delete event. Please try again.');
//         console.error('Error deleting event:', err);
//       } finally {
//         setDeletingEventId(null);
//       }
//     }
//   };

//   const handleViewEvent = (eventId) => {
//     navigate(/host/event/${eventId});
//   };

//   const handleLogout = async () => {
//     if (window.confirm('Are you sure you want to log out?')) {
//       try {
//         await signOut();
//         navigate('/admin/login');
//       } catch (err) {
//         console.error('Error signing out:', err);
//         // Still navigate to login even if signOut fails
//         navigate('/admin/login');
//       }
//     }
//   };

//   // Storage limit is not provided by backend, using a default for display
//   const storageLimit = 50; // GB - default limit
//   const storagePercentage = stats.totalStorageGb > 0 ? (stats.totalStorageGb / storageLimit) * 100 : 0;

//   const getEventStatus = (event) => {
//     if (event.is_archived) return 'archived';
//     if (!event.is_active) return 'inactive';
//     return 'active';
//   };

//   const formatTimeAgo = (dateString) => {
//     if (!dateString) return 'Unknown';
//     const date = new Date(dateString);
//     const now = new Date();
//     const diffMs = now - date;
//     const diffMins = Math.floor(diffMs / 60000);
//     const diffHours = Math.floor(diffMs / 3600000);
//     const diffDays = Math.floor(diffMs / 86400000);

//     if (diffMins < 1) return 'Just now';
//     if (diffMins < 60) return ${diffMins} minute${diffMins !== 1 ? 's' : ''} ago;
//     if (diffHours < 24) return ${diffHours} hour${diffHours !== 1 ? 's' : ''} ago;
//     return ${diffDays} day${diffDays !== 1 ? 's' : ''} ago;
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-deep-green flex items-center justify-center">
//         <div className="text-center">
//           <div className="inline-block w-8 h-8 rounded-full border-4 border-solid animate-spin border-cream border-r-transparent"></div>
//           <p className="mt-4 text-cream">Loading dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-deep-green">
//       <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 sm:py-6 lg:py-8">
//         <div className="overflow-hidden rounded-2xl bg-cream sm:rounded-3xl">
//           {/* Header Navigation */}
//           <nav className="border-b border-cream-dark/20 px-4 py-3 sm:px-6 sm:py-4 lg:px-12 lg:py-6">
//             <div className="flex items-center justify-between gap-2 sm:gap-4">
//               <div className="flex items-center gap-3">
//                 <Link to="/" className="flex-shrink-0 text-lg font-bold text-black sm:text-xl lg:text-2xl">
//                   PhotoLog
//                 </Link>
//                 <div className="rounded-lg border border-deep-gold/30 bg-gold/10 px-2 py-1">
//                   <span className="text-xs font-semibold text-deep-gold sm:text-sm">ADMIN</span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3 sm:gap-4">
//                 <Link
//                   to="/admin/users"
//                   className="px-2 text-xs font-medium text-black whitespace-nowrap transition-colors sm:text-sm lg:text-base hover:text-deep-green sm:px-0"
//                 >
//                   User Management
//                 </Link>
//                 <span className="hidden text-sm text-black/60 sm:inline sm:text-base">Administrator</span>
//                 <button
//                   onClick={handleLogout}
//                   className="rounded-lg p-2 text-black/60 transition-colors hover:bg-cream-dark hover:text-black"
//                   title="Logout"
//                 >
//                   <ArrowRightOnRectangleIcon className="h-5 w-5 sm:h-6 sm:w-6" />
//                 </button>
//               </div>
//             </div>
//           </nav>

//           {/* Page Header */}
//           <div className="border-b border-cream-dark/20 px-4 py-6 sm:px-6 lg:px-12 sm:py-8 lg:py-10">
//             <div className="flex items-center gap-3 sm:gap-4">
//               <div className="rounded-xl bg-deep-gold/10 p-3">
//                 <ShieldCheckIcon className="h-6 w-6 text-deep-gold sm:h-8 sm:w-8" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-black sm:text-3xl lg:text-4xl">Admin Dashboard</h1>
//                 <p className="mt-1 text-sm text-black/60 sm:text-base">System overview and management</p>
//               </div>
//             </div>
//           </div>

//           {/* Stats Grid */}
//           <div className="px-4 py-6 sm:px-6 lg:px-12 sm:py-8 lg:py-10">
//             {error && (
//               <div className="mb-6 p-4 rounded-xl border bg-red-50 border-red-200">
//                 <p className="text-sm text-red-700">{error}</p>
//               </div>
//             )}

//             <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
//               {/* Total Events */}
//               <div className="rounded-xl border border-cream-dark/30 bg-cream-light p-5 sm:p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-black/60 sm:text-base">Total Events</p>
//                     <p className="mt-1 text-2xl font-bold text-black sm:text-3xl">{stats.totalEvents}</p>
//                   </div>
//                   <div className="rounded-lg bg-deep-green/10 p-3">
//                     <CalendarIcon className="h-6 w-6 text-deep-green sm:h-8 sm:w-8" />
//                   </div>
//                 </div>
//               </div>

//               {/* Total Users */}
//               <div className="rounded-xl border border-cream-dark/30 bg-cream-light p-5 sm:p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-black/60 sm:text-base">Total Users</p>
//                     <p className="mt-1 text-2xl font-bold text-black sm:text-3xl">{stats.totalUsers}</p>
//                   </div>
//                   <div className="rounded-lg bg-emerald/10 p-3">
//                     <UsersIcon className="h-6 w-6 text-emerald sm:h-8 sm:w-8" />
//                   </div>
//                 </div>
//               </div>

//               {/* Total Photos */}
//               <div className="rounded-xl border border-cream-dark/30 bg-cream-light p-5 sm:p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-black/60 sm:text-base">Total Photos</p>
//                     <p className="mt-1 text-2xl font-bold text-black sm:text-3xl">{stats.totalPhotos.toLocaleString()}</p>
//                   </div>
//                   <div className="rounded-lg bg-deep-gold/10 p-3">
//                     <PhotoIcon className="h-6 w-6 text-deep-gold sm:h-8 sm:w-8" />
//                   </div>
//                 </div>
//               </div>

//               {/* Storage Used */}
//               <div className="rounded-xl border border-cream-dark/30 bg-cream-light p-5 sm:p-6">
//                 <div className="flex items-center justify-between">
//                   <div className="flex-1">
//                     <p className="text-sm font-medium text-black/60 sm:text-base">Storage Used</p>
//                     <p className="mt-1 text-xl font-bold text-black sm:text-2xl">{stats.totalStorageGb.toFixed(2)} GB</p>
//                     <p className="mt-1 text-xs text-black/50 sm:text-sm">of {storageLimit} GB</p>
//                   </div>
//                   <div className="rounded-lg bg-teal-brown/10 p-3">
//                     <ServerIcon className="h-6 w-6 text-teal-brown sm:h-8 sm:w-8" />
//                   </div>
//                 </div>
//                 <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-cream-dark/30">
//                   <div
//                     className={`h-full transition-all ${
//                       storagePercentage > 80 ? 'bg-red-500' : storagePercentage > 60 ? 'bg-deep-gold' : 'bg-deep-green'
//                     }`}
//                     style={{ width: ${Math.min(storagePercentage, 100)}% }}
//                   ></div>
//                 </div>
//               </div>
//             </div>

//             {/* Two Column Layout */}
//             <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
//               {/* All Events - Main Content */}
//               <div className="lg:col-span-2">
//                 <div className="overflow-hidden rounded-xl border border-cream-dark/30 bg-cream-light">
//                   <div className="border-b border-cream-dark/20 bg-cream px-6 py-4 sm:px-8 sm:py-5">
//                     <div className="flex items-center justify-between">
//                       <h2 className="text-lg font-bold text-black sm:text-xl">All Events</h2>
//                       <span className="text-sm text-black/60">{events.length} shown</span>
//                     </div>
//                   </div>
//                   {events.length === 0 ? (
//                     <div className="p-8 text-center">
//                       <p className="text-black/60">No events found</p>
//                     </div>
//                   ) : (
//                     <div className="divide-y divide-cream-dark/20">
//                       {events.map((event) => {
//                         const status = getEventStatus(event);
//                         return (
//                           <div key={event.id} className="p-5 transition-colors hover:bg-cream sm:p-6">
//                             <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
//                               <div className="flex-1">
//                                 <div className="mb-2 flex flex-wrap items-center gap-2 sm:gap-3">
//                                   <h3 className="text-base font-bold text-black sm:text-lg">{event.name}</h3>
//                                   <span className={`rounded-lg px-2 py-1 text-xs font-medium ${
//                                     status === 'active'
//                                       ? 'bg-emerald/10 text-emerald'
//                                       : status === 'inactive'
//                                       ? 'bg-black/10 text-black/70'
//                                       : 'bg-deep-gold/10 text-deep-gold'
//                                   }`}>
//                                     {status}
//                                   </span>
//                                 </div>
//                                 <div className="space-y-1.5 text-sm text-black/60">
//                                   <p>Host: <span className="font-medium">{event.host?.email || 'Unknown'}</span></p>
//                                   <div className="flex flex-wrap items-center gap-4">
//                                     <span className="flex items-center gap-1.5">
//                                       <PhotoIcon className="h-4 w-4" />
//                                       <span>{event.photo_count || 0} photos</span>
//                                     </span>
//                                     <span className="flex items-center gap-1.5">
//                                       <CalendarIcon className="h-4 w-4" />
//                                       <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="flex items-center gap-2 sm:ml-4">
//                                 <button
//                                   onClick={() => handleViewEvent(event.id)}
//                                   className="rounded-lg p-2 text-deep-green transition-colors hover:bg-deep-green/10"
//                                   title="View Event"
//                                 >
//                                   <EyeIcon className="h-5 w-5" />
//                                 </button>
//                                 <button
//                                   onClick={() => handleDisableEvent(event.id)}
//                                   disabled={deletingEventId === event.id}
//                                   className="rounded-lg p-2 text-deep-gold transition-colors hover:bg-deep-gold/10 disabled:opacity-50 disabled:cursor-not-allowed"
//                                   title={event.is_active ? "Disable Event" : "Enable Event"}
//                                 >
//                                   <ExclamationTriangleIcon className="h-5 w-5" />
//                                 </button>
//                                 <button
//                                   onClick={() => handleDeleteEvent(event.id)}
//                                   disabled={deletingEventId === event.id}
//                                   className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed"
//                                   title="Delete Event"
//                                 >
//                                   <TrashIcon className="h-5 w-5" />
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Sidebar */}
//               <div className="space-y-6">
//                 {/* Recent Uploads */}
//                 <div className="overflow-hidden rounded-xl border border-cream-dark/30 bg-cream-light">
//                   <div className="border-b border-cream-dark/20 bg-cream px-6 py-4 sm:px-8 sm:py-5">
//                     <h2 className="text-lg font-bold text-black sm:text-xl">Recent Uploads</h2>
//                   </div>
//                   {recentUploads.length === 0 ? (
//                     <div className="p-8 text-center">
//                       <p className="text-black/60">No recent uploads</p>
//                     </div>
//                   ) : (
//                     <div className="divide-y divide-cream-dark/20">
//                       {recentUploads.map((upload) => (
//                         <div key={upload.id} className="p-4">
//                           <div className="flex items-start gap-3">
//                             <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald/10">
//                               <PhotoIcon className="h-5 w-5 text-emerald" />
//                             </div>
//                             <div className="min-w-0 flex-1">
//                               <p className="truncate text-sm font-medium text-black">
//                                 {upload.event_id ? Event: ${upload.event_id} : 'Unknown Event'}
//                               </p>
//                               <p className="text-xs text-black/60">
//                                 {upload.host_email ? Host: ${upload.host_email} : 'Anonymous upload'}
//                               </p>
//                               <p className="mt-1 text-xs text-black/50">
//                                 {formatTimeAgo(upload.uploaded_at)}
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
