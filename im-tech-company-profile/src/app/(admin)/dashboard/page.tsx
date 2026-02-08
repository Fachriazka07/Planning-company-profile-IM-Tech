import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, FileText, Users, Wrench, Mail } from 'lucide-react';

// Dummy data
const stats = {
  portfolio: 3,
  blog: 3,
  team: 3,
  services: 3,
  contacts: 3,
};

const recentBlogs = [
  {
    id: '1',
    title: 'The Future of Web Development in 2026',
    date: '17/01/2026',
    status: 'published',
  },
  {
    id: '2',
    title: 'Best Practice for React Performance',
    date: '20/12/2025',
    status: 'published',
  },
];

const recentContacts = [
  {
    id: '1',
    name: 'Aliyudins',
    subject: 'Inquiry About Web Development Services',
    status: 'new',
  },
  {
    id: '2',
    name: 'Deni Firdaus',
    subject: 'Inquiry About Web Development Services',
    status: 'read',
  },
  {
    id: '3',
    name: 'Mifdlal',
    subject: 'Inquiry About Web Development Services',
    status: 'replied',
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-500 mt-2">
          Welcome back! Here&apos;s what&apos;s happening with your content.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <StatCard
          title="Portfolio Items"
          value={stats.portfolio}
          icon={<Briefcase className="h-4 w-4 text-purple-600" />}
          iconBg="bg-purple-100"
        />
        <StatCard
          title="Blog Post"
          value={stats.blog}
          icon={<FileText className="h-4 w-4 text-green-600" />}
          iconBg="bg-green-100"
        />
        <StatCard
          title="Team Members"
          value={stats.team}
          icon={<Users className="h-4 w-4 text-orange-600" />}
          iconBg="bg-orange-100"
        />
        <StatCard
          title="Services"
          value={stats.services}
          icon={<Wrench className="h-4 w-4 text-red-600" />}
          iconBg="bg-red-100"
        />
        <StatCard
          title="Contact Submission"
          value={stats.contacts}
          icon={<Mail className="h-4 w-4 text-green-600" />}
          iconBg="bg-green-100"
        />
      </div>

      {/* Recent Activity Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Blog Posts */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">Recent Blog Posts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {recentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="flex items-start justify-between border-b last:border-0 pb-4 last:pb-0"
              >
                <div className="space-y-1">
                  <p className="font-semibold text-sm leading-none">{blog.title}</p>
                  <p className="text-xs text-muted-foreground">{blog.date}</p>
                </div>
                <Badge variant="success" className="capitalize">
                  {blog.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Contact Submissions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">Recent Contact Submissions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {recentContacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-start justify-between border-b last:border-0 pb-4 last:pb-0"
              >
                <div className="space-y-1">
                  <p className="font-semibold text-sm leading-none">{contact.name}</p>
                  <p className="text-xs text-muted-foreground line-clamp-1">{contact.subject}</p>
                </div>
                <StatusBadge status={contact.status} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  iconBg,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
  iconBg: string;
}) {
  return (
    <Card className="rounded-xl border-slate-200 shadow-sm">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 p-5 pb-2">
        <span className="text-sm font-medium text-slate-600">{title}</span>
        <div className={`p-2 rounded-lg ${iconBg}`}>{icon}</div>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <div className="text-3xl font-bold text-slate-900 mt-2">{value}</div>
      </CardContent>
    </Card>
  );
}

function StatusBadge({ status }: { status: string }) {
  const variants: Record<
    string,
    'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info'
  > = {
    new: 'info',
    read: 'warning',
    replied: 'success',
    archived: 'secondary',
  };

  return (
    <Badge variant={variants[status] || 'default'} className="capitalize">
      {status}
    </Badge>
  );
}
